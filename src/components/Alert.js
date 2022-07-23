import React from 'react'



export default function Alert(props) {

    return (

        props.alert && <div className={`alert alert-primary ${props.alert.type}`} role="alert" id='alert'>
            {props.alert.type}:{props.alert.msg}

        </div>
    )
}
