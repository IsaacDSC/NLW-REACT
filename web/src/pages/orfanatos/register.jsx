import React from 'react'
import '../../styles/pages/registerOrfanatos.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Logo from '../../images/Local.svg'

export default function registerOrfanatos() {
    return (
        <>
            <div id="registerOrfanatos">
                <aside>
                    <Link to='/' className="logo">
                        <img src={Logo} alt="logotipo" />
                    </Link>

                    <Link to='/'>
                    <FiArrowLeft size={32} color="#fff" />
                    </Link>
                </aside>

                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h2>Dados</h2>
                            <h1>ASDASD</h1>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}