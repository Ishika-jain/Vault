import React from 'react';
import { useState } from 'react';

const Documents = () => {
  const [singleFile, setSingleFile] = useState(true);

  return (
    <div>
        <select id="chosen" onChange={()=>{setSingleFile(!singleFile); }}>
          <option  value="single"> Single file</option>
          <option  value="multi"> Multi File</option>
        </select>
        {singleFile && (<h2>single file</h2>)}
        {!singleFile && (<h2>multi file</h2>)}
    </div>
  )
}

export default Documents