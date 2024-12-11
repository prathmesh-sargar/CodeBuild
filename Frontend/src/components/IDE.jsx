import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const IDE = () => {
  const [tab, setTab] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [files, setFiles] = useState({
    html: {
      name: "index.html",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code With me</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>Hello World</h1>
    <script src="script.js"></script> 
</body>
</html>`,
    },
    css: {
      name: "style.css",
      code: `body {
  background: white;
  color: black;
}`,
    },
    js: {
      name: "script.js",
      code: `console.log("Hello, World!");`,
    },
  });

  const run = () => {
    const html = files.html.code;
    const css = `<style>${files.css.code}</style>`; // Embedding CSS here (you can remove this line)
    const js = `<script>${files.js.code}</script>`; // Embedding JS here (remove this for external file)
    const iframe = document.getElementById("iframe");
    if (iframe) {
      iframe.srcdoc = html + css + js;
    }
  };

  useEffect(() => {
    run();
  }, [files]);

  const handleEditorChange = (value) => {
    setFiles((prev) => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        code: value || "",
      },
    }));
  };

  const downloadFiles = () => {
    const zip = new JSZip();
    Object.keys(files).forEach((key) => {
      zip.file(files[key].name, files[key].code);
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "code_files.zip");
    });
  };

  return (
    <>
      {/* Navbar */}
      <div className="nav flex items-center bg-zinc-800 h-[70px] justify-between px-[20px]">
        <h2 className="text-xl text-white">Code Editor</h2>
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <select
            className="bg-gray-700 text-white p-2 rounded"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
          </select>
          {/* Download Button */}
          <button
            onClick={downloadFiles}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download Files
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row w-screen"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        {/* Editor Section */}
        <div className="w-full md:w-[50%] h-full">
          {/* Tabs */}
          <div className="tabs flex items-center gap-2 px-4 py-2 bg-gray-800">
            {Object.keys(files).map((fileType) => (
              <button
                key={fileType}
                onClick={() => setTab(fileType)}
                className={`px-4 py-2 rounded ${
                  tab === fileType
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {fileType.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Editor */}
          <Editor
            height="calc(100vh - 120px)"
            language={tab}
            theme={theme}
            value={files[tab].code}
            onChange={handleEditorChange}
            beforeMount={(monaco) => {
              monaco.languages.html.htmlDefaults.setOptions({
                suggest: { html5: true },
              });
              monaco.languages.css.cssDefaults.setOptions({
                validate: true,
                lint: { compatibleVendorPrefixes: "ignore" },
              });
              monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(
                { noSemanticValidation: false, noSyntaxValidation: false }
              );
            }}
          />
        </div>

        {/* Output Section */}
        <div
          className="w-full md:w-[50%] bg-white"
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          <iframe
            id="iframe"
            className="w-full h-full"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default IDE;
