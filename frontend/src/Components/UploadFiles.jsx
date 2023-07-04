import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import bg from "../images/pdf.png";
import { useParams } from "react-router-dom";
import ToastUi from "../ui/ToastUi";
import DeleteIcon from '@mui/icons-material/Delete';


const UploadFiles = () => {
  const [singleFile, setSingleFile] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");
  const [singleFiles, setSingleFiles] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const url = window.location.href;
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];
  const { username } = useParams();


  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const deleteHandler = async(fileid) =>{
    await axios.delete(`http://localhost:8000/api/getSingleFile/${fileid}`)
    console.log(fileid)

  }

  const SingleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("username", username);
    formData.append("lastPart", lastPart);


    await axios
      .post(`http://localhost:8000/api/singleFile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setToastMessage(res.data.message);
        setShowToast(true);
      })
      .catch((err) => {
        console.log(err);
        setToastMessage("set a valid file");
        setShowToast(true);
      });
  };

  const getSingleFile = async () => {
    const response = await axios.get(`http://localhost:8000/api/getSingleFile/${username}/${lastPart}`);
    return response.data;
  };
  
  const getSingleFilesList = async () => {
    try {
      const filesList = await getSingleFile();
      setSingleFiles(filesList);
    } catch (error) {
      console.log(error);
    }
  };
  

  const getFileDisplayName = (fileName) => {
    const parts = fileName.split(".");
    const nameWithoutExtension = parts.shift();
    return nameWithoutExtension;
  };

  useEffect(() => {
    getSingleFilesList();
  }, [singleFiles]);

  return (
    <div>
      <div>
        {/* <select
          id="chosen"
          onChange={() => {
            setSingleFile(!singleFile);
          }}
        >
          <option value="single"> Single file</option>
          <option value="multi"> Multi File</option>
        </select> */}
        {singleFile && (
          <div>
            <h2> Single File Upload</h2>
            <input type="file" className="form-control " onChange={(e) => SingleFileChange(e)} style={{ width: "90%", margin: "2% 0% 2%" }}></input>
            <button type="button" className="btn btn-danger  " onClick={uploadSingleFile} style={{ marginBottom: "2%" }}>
              Upload
            </button>

            {/* Click on file to open it */}
            <div style={{ width: "80vw", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1px" }}>
              {singleFiles.map((file, index) => {
                const name = file.filePath.replace(/\//g, "/");
                const lastName = file.fileName;
                const lastThree = lastName.substring(lastName.length - 3);
                const fileRealPath = lastThree === "pdf" ? bg : `http://localhost:8000/${file.filePath}`;

                return (
                  <div style={{ width: "8vw", display: "flex", flexDirection: "column", marginBottom: "9%" }} key={file.filePath}>
                   
                   <div style={{ display: "flex" }}>
                     <img src={fileRealPath} height="100" width="100" alt="name" key={index} style={{ border: "1px black solid", margin: "10px" }}
                      onClick={(file) => {
                        window.open(`http://localhost:8000/${name}`);
                      }}
                        
                    ></img>
                     <span onClick={() => deleteHandler(file._id)} style={{color: "blue", paddingTop:"9px"}}><DeleteIcon/></span>

                    </div>


                    <label>{getFileDisplayName(file.fileName)}</label>

                    {selectedImageIndex !== null && (
                      <div className="modal">
                        <div className="modal-content">
                          <img src={`http://localhost:8000/${file.fileName}`} alt={`Full-sized ${selectedImageIndex}`} height={500} width={500} />

                          <button onClick={handleCloseModal}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!singleFile && <h2>multi file</h2>}
      </div>
      {showToast && <ToastUi message={toastMessage} setShowToast={setShowToast} />}

    </div>
  );
};

export default UploadFiles;
