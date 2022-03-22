import React,{ useState} from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { projectfirestore, projectstorage } from '../firebase/config';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./styles/uploadForm.css"
const UploadForm = () => {
    const[error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);

    const types =['image/png', 'image/jpeg'];

    const changeHandler = async(e) =>{
        let selected = e.target.files[0];
        geturl(selected)
    }
    function geturl(file){
        const storageRef = ref(projectstorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                setError(error);

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // setUrl( downloadURL);
                    storefirebase(downloadURL)
                });
            }
        )

        storefirebase(url);

    }
    async function storefirebase(url){
        const docRef = url != null && await addDoc(collection(projectfirestore, "images"), {
            url:url,
            timeuploadedate:Timestamp.now(),
            imageavailable:true
          });
          url != null && console.log("Document written with ID: ", docRef.id); 
    }


    return (
        <div className='form-container'>
            <form>
                <label>
                <input type= "file" onChange={changeHandler} className="custom-file-input" />
                </label>
                <div className="output">
                </div> 
            </form>
        </div>
    )
}
export default UploadForm;