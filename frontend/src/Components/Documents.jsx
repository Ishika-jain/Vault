import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import bg from "../images/bg.png"


const Documents = () => {
  const [singleFile, setSingleFile] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");
  const [singleFiles, setSingleFiles] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  const handleImagePreviewClick = (index) => {
  
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const SingleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadSingleFile = async () => {
    const formData = {
      file: selectedFile,
    };

    await axios
      .post("http://localhost:5000/api/singleFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getSingleFile = async () => {
    const response = await axios.get("http://localhost:5000/api/getSingleFile");
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

  useEffect(() => {
    getSingleFilesList();
  }, []);

  return (
    <div>
      <select
        id="chosen"
        onChange={() => {
          setSingleFile(!singleFile);
        }}
      >
        <option value="single"> Single file</option>
        <option value="multi"> Multi File</option>
      </select>
      {singleFile && (
        <div>
          <h2> Single File Upload</h2>
          <label>Title</label>
          <input
            type="file"
            className="form-control "
            onChange={(e) => SingleFileChange(e)}
          ></input>
          <button
            type="button"
            className="btn btn-danger  "
            onClick={uploadSingleFile}
          >
            Upload
          </button>
          {singleFiles.map((file, index) => {
            const name = file.filePath.replace(/\//g, "/");
            const lastName = file.fileName;
            const lastThree = lastName.substring(lastName.length - 3);
            const fileRealPath = lastThree==='pdf'? bg: `http://localhost:5000/${file.filePath}`;
        
              return (
              <div style={{ width: "80vw", display: "flex" }} key={file.filePath}>
                <label >{file.fileName}</label>

               


                <img
                  src={fileRealPath}
                  height="100"
                  width="100"
                  alt="name"
                  key={index}
                  style={{ border: "1px black solid", margin: "10px" }}
                  onClick={(file) => {window.open(`http://localhost:5000/${name}`)}}   
                ></img>
                

{/* {selectedImageIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <img
                  src={`http://localhost:5000/${file.fileName}`}
                  alt={`Full-sized ${selectedImageIndex}`}
              height={500}
              width={500}
              
            />
            
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )} */}
              </div>

            );
          })}
        </div>
      )}
      {!singleFile && <h2>multi file</h2>}
    </div>
  );
};

export default Documents;
