import React from 'react'
import "./styles/imagecard.css"
import {MdOutlineFileDownload} from "react-icons/md"
import {MdOutlineShare} from "react-icons/md"
import { saveAs } from 'file-saver'

function Imagecard({image}) {
  const style = {fontSize:"2rem", color:"white"}
  const styles = {fontSize:"3rem", color:"white"}

  function handledownload(){
    saveAs(image.url,"image.jpg")
  }
  function handleshare(){
    navigator.clipboard.writeText(image.url)
    alert("Copied")
  }

  return (
    <div className='image-card'>
        <img src={image.url}/>
        <div className='icons'>
          <div onClick={handleshare}>
            <MdOutlineShare style={style}/>
          </div>
          <div className='download' onClick={handledownload}>
            <MdOutlineFileDownload style={styles}/>
          </div>
        </div>
    </div>
  )
}

export default Imagecard