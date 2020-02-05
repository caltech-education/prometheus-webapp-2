import React from 'react'
import './style.scss'
import InputsLogin from '../../components/InputsLogin'
import Logo from '../../assets/imgs/Logo/Logo@3x.png'

// Icons
import IconBuilding from '../../assets/svgs/Icon_awesome-building/Icon awesome-building@3x.png'
import IconTeacher from '../../assets/svgs/Icon_awesome-chalkboard-teacher/Icon awesome-chalkboard-teacher@3x.png'
import IconSchool from '../../assets/svgs/Icon_awesome-school/Icon awesome-school@3x.png'
import IconIonicSchool from '../../assets/svgs/Icon_ionic-md-school/Icon ionic-md-school@3x.png'

export default function Login() {
    return (
        <div id="login" className="login">
            <section className="container-logo">
                <img width="100%" height="100%" src={Logo} alt="Logo" />
            </section>

            <section className="mt40 mb20">
                <h5 className="color-purple semi-bold ma0">Seja</h5>
                <h5 className="color-purple bold ma0">Bem-vindo</h5>
            </section>

            <section className="icons">
                <img src={IconBuilding} />
                <img src={IconTeacher} />
                <img src={IconSchool} />
                <img src={IconIonicSchool} />
            </section>
            
            <form>
                <InputsLogin />
                <span>
                    <input type="checkbox"></input>
                    Lembrar login
                </span>
                <a href="/pass-req">Esqueci minha senha</a>
                <button>Entrar</button>
            </form>
       </div>
    )
}