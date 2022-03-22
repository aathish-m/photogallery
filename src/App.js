import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';


function App() {

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <div className="imagegrid">
         <ImageGrid/>
      </div>
    </div>
  );
}

export default App;
