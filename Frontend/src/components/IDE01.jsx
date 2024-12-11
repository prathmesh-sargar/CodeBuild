import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const IDE01 = () => {
  // Default code files
  const defaultFiles = {
    html: {
      name: "index.html",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
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
  };

  const [tab, setTab] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [files, setFiles] = useState(() => {
    // Retrieve files from localStorage or use default values
    const savedFiles = localStorage.getItem("codeFiles");
    return savedFiles ? JSON.parse(savedFiles) : defaultFiles;
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

  // Save to localStorage when files state changes
  useEffect(() => {
    localStorage.setItem("codeFiles", JSON.stringify(files));
  }, [files]);

  const downloadFiles = () => {
    const zip = new JSZip();
    Object.keys(files).forEach((key) => {
      zip.file(files[key].name, files[key].code);
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "code_files.zip");
    });
  };

  const resetFiles = () => {
    setFiles(defaultFiles); // Reset to default
    localStorage.removeItem("codeFiles"); // Clear from localStorage
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center bg-zinc-800 h-[70px] justify-between px-[20px] ">
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
          {/* Remove Button */}
          <button
            onClick={resetFiles}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove All
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div
        className="flex flex-col md:flex-row w-screen"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        {/* Editor Section */}
        <div className="w-[95%] md:w-[50%] h-full ">
          {/* Tabs */}
          <div className="tabs flex items-center gap-2 px-4 py-2 bg-gray-800">
            {["html", "css", "js"].map((fileType) => (
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
export default IDE01;

// import React, { useState, useEffect } from "react";
// import Editor from "@monaco-editor/react";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// const IDE01 = () => {
//   const defaultFiles = {
//     html: {
//       name: "index.html",
//       code: `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//     <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body>
//     <h1>Hello World</h1>
//     <script src="script.js"></script>
// </body>
// </html>`,
//     },
//     css: {
//       name: "style.css",
//       code: `body {
//   background: white;
//   color: black;
// }`,
//     },
//     js: {
//       name: "script.js",
//       code: `console.log("Hello, World!");`,
//     },
//   };

//   const [tab, setTab] = useState("html");
//   const [theme, setTheme] = useState("vs-dark");
//   const [files, setFiles] = useState(() => {
//     const savedFiles = localStorage.getItem("codeFiles");
//     return savedFiles ? JSON.parse(savedFiles) : defaultFiles;
//   });
//   const [resources, setResources] = useState(() => {
//     const savedResources = localStorage.getItem("resources");
//     return savedResources ? JSON.parse(savedResources) : [];
//   });

//   const run = () => {
//     const html = files.html.code;
//     const css = `<style>${files.css.code}</style>`;
//     const js = `<script>${files.js.code}</script>`;
//     const iframe = document.getElementById("iframe");
//     if (iframe) {
//       iframe.srcdoc = html + css + js;
//     }
//   };

//   useEffect(() => {
//     run();
//   }, [files]);

//   const handleEditorChange = (value) => {
//     setFiles((prev) => ({
//       ...prev,
//       [tab]: {
//         ...prev[tab],
//         code: value || "",
//       },
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem("codeFiles", JSON.stringify(files));
//   }, [files]);

//   useEffect(() => {
//     localStorage.setItem("resources", JSON.stringify(resources));
//   }, [resources]);

//   const downloadFiles = () => {
//     const zip = new JSZip();
//     Object.keys(files).forEach((key) => {
//       zip.file(files[key].name, files[key].code);
//     });
//     resources.forEach((res) => {
//       zip.file(res.name, res.file);
//     });

//     zip.generateAsync({ type: "blob" }).then((content) => {
//       saveAs(content, "code_files.zip");
//     });
//   };

//   const resetFiles = () => {
//     setFiles(defaultFiles);
//     setResources([]);
//     localStorage.removeItem("codeFiles");
//     localStorage.removeItem("resources");
//   };

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setResources((prev) => [
//           ...prev,
//           { name: file.name, file: reader.result },
//         ]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <>
//       <div className="flex items-center bg-zinc-800 h-[70px] justify-between px-[20px]">
//         <h2 className="text-xl text-white">Code Editor</h2>
//         <div className="flex items-center gap-4">
//           <select
//             className="bg-gray-700 text-white p-2 rounded"
//             onChange={(e) => setTheme(e.target.value)}
//             value={theme}
//           >
//             <option value="vs-dark">Dark</option>
//             <option value="vs-light">Light</option>
//           </select>
//           <button
//             onClick={downloadFiles}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Download Files
//           </button>
//           <button
//             onClick={resetFiles}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Remove All
//           </button>
//         </div>
//       </div>

//       <div
//         className="flex flex-col md:flex-row w-screen"
//         style={{ minHeight: "calc(100vh - 70px)" }}
//       >
//         <div className="w-[95%] md:w-[50%] h-full">
//           <div className="tabs flex items-center gap-2 px-4 py-2 bg-gray-800">
//             {["html", "css", "js", "resources"].map((fileType) => (
//               <button
//                 key={fileType}
//                 onClick={() => setTab(fileType)}
//                 className={`px-4 py-2 rounded ${
//                   tab === fileType
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-700 text-gray-300"
//                 }`}
//               >
//                 {fileType.toUpperCase()}
//               </button>
//             ))}
//           </div>
//           {tab !== "resources" ? (
//             <Editor
//               height="calc(100vh - 120px)"
//               language={tab}
//               theme={theme}
//               value={files[tab]?.code || ""}
//               onChange={handleEditorChange}
//             />
//           ) : (
//             <div className="p-4 bg-white overflow-auto">
//               <h3 className="text-xl font-bold mb-4">Uploaded Resources:</h3>
//               {resources.length > 0 ? (
//                 <ul>
//                   {resources.map((res, index) => (
//                     <li key={index} className="flex items-center gap-4 mb-4">
//                       <div>
//                         {res.file.startsWith("data:image") && (
//                           <img
//                             src={res.file}
//                             alt={res.name}
//                             className="w-16 h-16 object-cover rounded"
  
//                           />
//                         )}
//                         {res.file.startsWith("data:video") && (
//                           <video
//                             src={res.file}
//                             className="w-16 h-16 rounded"
//                             controls
//                           />
//                         )}
//                       </div>
//                       <div>
//                         <span className="font-bold text-black">{res.name}</span><br />
//                         <code className="text-blue-500 w-[40%]">{res.file}</code>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No resources uploaded yet.</p>
//               )}
//               <label
//                 className="bg-green-400 mt-4 px-4 py-2 rounded text-white cursor-pointer"
//                 htmlFor="uploadbtn"
//               >
//                 Upload Resource
//               </label>
//               <input
//                 id="uploadbtn"
//                 type="file"
//                 onChange={handleFileUpload}
//                 accept="image/*,video/*"
//                 className="hidden"
//               />
//             </div>
//           )}
//         </div>

//         <div
//           className="w-full md:w-[50%] bg-white"
//           style={{ minHeight: "calc(100vh - 70px)" }}
//         >
//           <iframe
//             id="iframe"
//             className="w-full h-full"
//             style={{ border: "none" }}
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IDE01;
