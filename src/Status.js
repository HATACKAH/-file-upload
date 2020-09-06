import React from 'react'
import T from 'prop-types'

const Status = ({text}) =>{
    return <p>STATUS: {text}</p>
}
Status.propTypes = {
    text: T.string.isRequired
}

export {Status}