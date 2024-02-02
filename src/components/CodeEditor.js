import React from 'react'
import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({code,theme,language,onChange,width})=> {
    const [val,setVal] = useState(code || "");
     const handleChange = (value) => {
           setVal(value);
           onChange("code",value)
     }
   
  return (
    <>
      <Editor
      className='editor'
        height="80vh"
        width={width}
        language= {language || "C++"}
        value = {val}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleChange}
      />
    
</>  
  );
}

export default CodeEditor