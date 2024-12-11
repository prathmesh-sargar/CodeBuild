import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { dracula, githubLight } from "@uiw/codemirror-themes-all";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const IDECode = () => {
  const [tab, setTab] = useState("html");
  const [theme, setTheme] = useState("dracula");
  const [files, setFiles] = useState({
    html: {
      name: "index.html",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code IDE</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-4xl text-center mt-10 text-blue-500">Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>`,
    },
    css: {
      name: "style.css",
      code: `body {
  background: #f3f4f6;
  font-family: Arial, sans-serif;
}`,
    },
    js: {
      name: "script.js",
      code: `console.log("Hello, World!");`,
    },
  });

  const run = () => {
    const html = files.html.code;
    const css = `<style>${files.css.code}</style>`;
    const js = `<script>${files.js.code}</script>`;
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
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-5 py-3 bg-gray-800">
        <h1 className="text-2xl font-bold">Code IDE</h1>
        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <select
            className="bg-gray-700 text-white px-3 py-2 rounded"
            onChange={(e) => setTheme(e.target.value === "dark" ? dracula : githubLight)}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          {/* Download Button */}
          <button
            onClick={downloadFiles}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            Download
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-grow">
        {/* Code Editor Section */}
        <div className="w-1/2 flex flex-col bg-gray-800">
          {/* Tabs */}
          <div className="flex gap-2 px-4 py-2 bg-gray-700">
            {["html", "css", "js"].map((type) => (
              <button
                key={type}
                onClick={() => setTab(type)}
                className={`px-4 py-2 rounded ${
                  tab === type ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
                }`}
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Editor */}
          <CodeMirror
            value={files[tab].code}
            extensions={tab === "html" ? [html()] : tab === "css" ? [css()] : [javascript()]}
            onChange={handleEditorChange}
            theme={theme}
            className="flex-grow"
          />
        </div>

        {/* Output Section */}
        <div className="w-1/2 bg-white">
          <iframe id="iframe" className="w-full h-full border-none"></iframe>
        </div>
      </div>
    </div>
  );
};

export default IDECode;
