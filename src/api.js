const upload = (file, onSuccess,onFailure)=>{
    const data = new FormData()
    data.append('file', file)

    window.fetch('https://file.io/?expires=1d', {
        method: 'POST',
        mode: 'cors',
        body: data
    })
    .then(response =>{
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(response.status)
        }
    })
    .then(data=> onSuccess(data))
    .catch(error =>{
        onFailure()
    })
}

export {upload}