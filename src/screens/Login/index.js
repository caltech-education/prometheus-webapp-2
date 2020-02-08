import React, { useState } from 'react'
import './style.scss'
import LoginRequired from '../../actions/login'

import Logo from '../../assets/imgs/Logo/Logo@3x.png'
import Radio from '../../components/Radio'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div id="login" className="login">
            <section className="container-logo">
                <img width="100%" height="100%" src={Logo} alt="Logo" />
            </section>

            <div className="container-informations">
                <section className="mt40 mb20">
                    <h5 className="color-purple semi-bold ma0">Seja</h5>
                    <h5 className="color-purple bold ma0">Bem-vindo</h5>
                </section>

                <section className="icons mb20">
                    <Radio />
                </section>
            </div>
            
            <form>
                <div className="contain-inputs">
                    <input onChange={e => setUsername(e.target.value)} className="login f12" />
                    <input onChange={e => setpassword(e.target.value)} className="pass" type="password" />
                </div>
                <div className="action mb40">
                    <span className="check">
                        <Checkbox text="Lembrar login"/>
                    </span>
                    <a href="/pass-req">Esqueci minha senha</a>
                </div>
            </form>
            <Button onClick={() => LoginRequired(username, password)} text="Entrar"/>
       </div>
    )
}