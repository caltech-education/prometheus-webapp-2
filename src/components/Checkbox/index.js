import React from 'react'
import './style.scss'

export default function Checkbox({text}) {
    return (
        <>
            <label className="container">
                <span className="text-checkbox">{text}</span>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        </>
    )
}