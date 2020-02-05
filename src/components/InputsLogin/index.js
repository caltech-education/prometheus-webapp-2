import React from 'react'
import './style.scss'

export default function InputsLogin() {
    return(
        <>
            <div className="contain-inputs">
                <input className="login f12" />
                <input className="pass" type="password" />
            </div>
        </>
    )
}