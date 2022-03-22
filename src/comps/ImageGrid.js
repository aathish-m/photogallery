import React, { useEffect, useState } from 'react';
import { projectfirestore } from '../firebase/config';
import { collection, doc, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import "./styles/imagegrid.css"
import Imagecard from './Imagecard';
const ImageGrid = ({ setSelectedImg }) => {
    const[images,setImages] = useState();
    useEffect(async() => {
        const q = query(collection(projectfirestore,"images"),orderBy("timeuploadedate", "desc"));
        const snapshot = onSnapshot(q,(querySnapshot) => {
            const temp = [];
            querySnapshot.forEach((doc) => {
                temp.push(doc.data());
            })
            
            setImages(temp);
        })
        
    },[1])

    images && console.log(images);


    images&&console.log(images);
    return (
        <div className="img-grid">
           {
               images && images.map((image) => (
                   <Imagecard image={image}/>
               ))
           }

           <h1></h1>
        </div>
    )
}

export default ImageGrid;