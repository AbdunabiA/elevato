import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import './dropZone.scss'
import { Button } from "components/buttons";
import { usePost } from "crud";
import Loader from "components/loader";

export default function DropZone({
                //  field: { value, name },
                //  form: { setFieldValue, setFieldTouched, errors, touched },
                 photoUrl,
                 sendUrl,
                 method='post',
                 onSuccess=()=>{},
                 onError=()=>{},
               }) {
                const { mutate, isLoading } = usePost();
                const ref = useRef(null);
                const onDrop = useCallback((acceptedFiles) => {
                  let formData = new FormData();
                  formData.append("photo", acceptedFiles[0]);
                  mutate({
                    url: `${sendUrl}`,
                    method: method,
                    values: formData,
                    onSuccess: (data) => onSuccess(data),
                    onError: (err) => onError(err),
                  });
                 }, []);
                //  console.log(value);
                 const {
                   getRootProps,
                   getInputProps,
                   isDragActive,
                 } = useDropzone({ onDrop });
               
                 return (
                   <>
                     <div
                       style={{ display: photoUrl ? "none" : "block" }}
                       onClick={() => ref.current.click()}
                     >
                       <div
                         {...getRootProps({
                           className: "drop-zone__wrapper",
                         })}
                       >
                         <input {...getInputProps()} ref={ref} type="file" />
                         {isDragActive ? (
                           <p>Drop the files here ...</p>
                         ) : (
                           <p>
                             {!isLoading ? (
                               <span className="error">
                                 Rasm bo'lishi shart. Bu yerga bosing yoki
                                 rasmni bu yerga qoying
                               </span>
                             ) : isLoading ? (
                               <Loader />
                             ) : null}
                           </p>
                         )}
                       </div>
                     </div>
                     <div style={{ display: photoUrl ? "block" : "none" }}>
                       <img src={photoUrl} alt="img" />;
                       <Button
                         onClick={() => ref.current.click()}
                         type={"button"}
                         text={"Rasmni o'zgartirish"}
                         disabled={isLoading ? true : false}
                       />
                     </div>
                   </>
                 );
               }
