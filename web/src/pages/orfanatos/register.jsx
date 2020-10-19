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
                    <div className="logo">
                        <Link to='/' className="logo">
                            <img src={Logo} alt="logotipo" />
                        </Link>
                    </div>
                    <div className="btn">
                        <Link to='/'>
                            <FiArrowLeft className="preview" size={32} color="#fff" />
                        </Link>
                    </div>

                </aside>

                <div className="container">
                            <h2>Dados</h2>
                            <hr/>
                        <div className="card-body">
                    </div>
                </div>

            </div>
        </>
    )
}