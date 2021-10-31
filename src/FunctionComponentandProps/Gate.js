import React from 'react'

const Gate = (props) => {
    return (
        <div>
            {(props.isOpen)? (<h1>Open</h1>): <h2>Closed</h2> }
        </div>
    )
}

export default Gate
