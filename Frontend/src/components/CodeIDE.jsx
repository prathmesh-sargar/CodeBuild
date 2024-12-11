import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';

const CodeIDE = () => {

  const [tab, setTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const run = () => {
    const html = htmlCode;
    const css = "<style>" + cssCode + "</style>";
    const js = "<script>" + jsCode + "</script>";
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  }

  useEffect(() => {
    run()
  }, [htmlCode, cssCode, jsCode])

  useEffect(() => {
    run()
  }, [])


  return (
    <>
      <div className="nav flex items-center bg-zinc-800 h-[70px] justify-between px-[50px]">
        <div className="left">
          <h2 className='text-xl'>Code Editior</h2>
        </div>
        <div className="right"></div>
      </div>

      <div className="con flex items-center justify-between w-screen" style={{ minHeight: "calc(100vh - 70px)" }}>
        <div className='w-[50%] h-full'>
          <div className="tabs pt-[10px] ml-[30px] flex items-center gap-[10px] w-full">
            <div onClick={() => { setTab("html") }} className="tab p-[5px] bg-zinc-800 cursor-pointer px-[20px]">HTML</div>
            <div onClick={() => { setTab("css") }} className="tab p-[5px] bg-zinc-800 cursor-pointer px-[20px]">CSS</div>
            <div onClick={() => { setTab("js") }} className="tab p-[5px] bg-zinc-800 cursor-pointer px-[20px]">JavaScript</div>
          </div>
          {
            tab === "html" ? (
              <Editor
                height="90vh"
                className="pt-4"
                language="html"
                theme="vs-dark"
                value={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Html page</title>
</head>
<body>
     <h1>Hello World </h1>
</body>
</html>
                `}
                onChange={(e) => {
                  setHtmlCode(e || "");
                }}
              />
            ) : tab === "css" ? (
              <Editor
                height="90vh"
                className="pt-4"
                language="css"
                theme="vs-dark"
                value={`
body{
  background: #fff !important;
  color: #000;
}
                `}
                onChange={(e) => { setCssCode(e || "") }}
              />
            ) : tab === "js" ? (
              <Editor
                height="90vh"
                className="pt-4"
                language="javascript"
                theme="vs-dark"
                value="console.log('Hello, World!');"
                onChange={(e) => { setJsCode(e || "") }}
              />
            ) : (
              ""
            )
          }

        </div>
        <div className='w-[50%]' style={{ minHeight: "calc(100vh - 70px)" }}>
          <iframe id='iframe' className='w-full bg-white' style={{ minHeight: "calc(100vh - 70px)" }}></iframe>
        </div>
      </div>
    </>
  )
}

export default CodeIDE