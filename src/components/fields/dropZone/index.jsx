import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import './dropZone.scss'
import { Button } from "components/buttons";

export default function DropZone({
                 field: { value, name },
                 form: { setFieldValue, setFieldTouched, errors, touched },
               }) {
                 const [url, setUrl] = useState(null);
                 const onDrop = useCallback((acceptedFiles) => {
                   // console.log(acceptedFiles);
                   const oFReader = new FileReader();
                   oFReader.readAsDataURL(acceptedFiles[0]);

                   oFReader.onload = function(e) {
                     setUrl(e.target.result);
                     setFieldValue(name, e.target.result);
                   };
                   
                 }, []);
                 console.log(value);
                 const {
                   getRootProps,
                   getInputProps,
                   isDragActive,
                 } = useDropzone({ onDrop });
               
                 return (
                   <>
                     <div style={{ display: url ? "none" : "block" }}>
                       <div
                         {...getRootProps({
                           className: "drop-zone__wrapper",
                         })}
                       >
                         <input
                           {...getInputProps()}
                           onBlur={() => setFieldTouched(name, true)}
                           name={name}
                           type="file"
                         />
                         {isDragActive ? (
                           <p>Drop the files here ...</p>
                         ) : (
                           <p>
                             {touched[name] && errors[name] ? (
                               <span className="error">Rasm bo'lishi shart</span>
                             ) : (
                               "Drag 'n' drop some files here, or click to select files"
                             )}
                           </p>
                         )}
                       </div>
                     </div>
                     <div style={{ display: url ? "block" : "none" }}>
                       <img src={url} alt="img" />;
                       <Button
                         onClick={() => {
                           setUrl(null);
                           setFieldValue(name, '');
                         }}
                         color={"red"}
                         text={"Rasmni o'chirish"}
                       />
                     </div>
                   </>
                 );
               }
