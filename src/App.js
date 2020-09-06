import React, {useState} from 'react';
import {UploadForm} from './UploadForm'
import {List} from './List'
import {Status} from './Status'

function App() {

  const [paths, setPaths] = useState([])
  const [status, setStatus] = useState('')

  const onUpdate = (path) =>{
    if (path) {
      setStatus('OK')
      
      setPaths(paths.concat(path))
    } else {
      setStatus('Fail')

    }
    
  }

  return (
    <div className='container'>
    <UploadForm onUpload={onUpdate}/>
    <List/>
    <Status text={status}/>
    </div>
  );
}

export default App;
