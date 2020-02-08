import React from 'react'
import './style.scss'

export default function Button({ text, onClick }){
    return (
        <button onClick={onClick} className="btn">{text}</button>
    )
}