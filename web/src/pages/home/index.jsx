import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import '../../styles/global.css'
import '../../styles/pages/landing.css'
import {Link} from 'react-router-dom'

import logoImg from '../../images/Logo.svg'

export default function Home() {
    return (
        <>
            <div id="page-landing" >
                <div className="content-wrapper">

                    <img src={logoImg} alt="Logotipo" />

                    <main>
                        <h1> Leve felicidade para o mundo</h1>
                        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                    </main>

                    <div className="location">
                        <strong>Rio de Janeiro</strong>
                        <span>Barra Mansa</span>
                    </div>

                    <Link to="/login" className="enter-app">
                        <FiArrowRight size={26} rgba="(0, 0, 0, 00.6)"/>
                    </Link>

                </div>
            </div >
        </>
    )

}