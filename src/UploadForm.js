import React, {useRef} from 'react'
import T from 'prop-types'
import {upload} from './api'

const UploadForm = ({onUpdate}) => {
    const inputEl = useRef(null)

    const _onSuccess=(data)=>{
       onUpdate(data.link)
    }

    const _onFailure =() =>{
        onUpdate(null)
    }

    const onUpload = e => (
        e.preventDefault(),
        console.log(inputEl.current.files[0]),

        upload(inputEl.current.files[0], _onSuccess, _onFailure)
    )

    return(
        <form onSubmit={onUpload}>
            <input ref={inputEl} type='file' />
            <button type='submit'>Upload</button>
        </form>
    )
}

UploadForm.propTypes = {
    onUpdate: T.func.isRequired
}

export {UploadForm}