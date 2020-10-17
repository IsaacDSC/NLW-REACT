import React from 'react'
import Foto from '../../images/Foto.svg'
import '../../styles/pages/orfanatos.css'
import img1 from '../../images/img1.svg'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'
import img4 from '../../images/img4.svg'
import img5 from '../../images/img5.svg'
import img6 from '../../images/img6.svg'
import wpp from '../../images/Whatsapp.svg'

export default function orfanatos() {
    return (
        <>
            <div id="orfanatos">
                <div class="mb-3 mt-2">
                    <img src={Foto} className="capa" alt="foto de capa do Orfanatos" />
                    <div class="card-body">
                        <header>
                            <ul>
                                <li>
                                    <img src={img1} alt="" />
                                </li>
                                <li>
                                    <img src={img2} alt="" />
                                </li>
                                <li>
                                    <img src={img3} alt="" />
                                </li>
                                <li>
                                    <img src={img4} alt="" />
                                </li>
                                <li>
                                    <img src={img5} alt="" />
                                </li>
                                <li>
                                    <img src={img6} alt="" />
                                </li>
                            </ul>
                            <h1>Orf. Esperança</h1>
                            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>
                            <p><small class="text-muted">Last updated 3 mins ago</small></p>
                        </header>
                        <div className="map">

                        </div>
                        <hr />
                        <div className="instrutions">
                            <h2>Instruções para visita</h2>
                            <p>Venha como se sentir a vontade e traga muito amor e paciência para dar.</p>
                            <div className="atendimento">
                                <div className="row">
                                    <div className="colOne">
                                        <i className=""></i>
                                        <p className="hr">Horário de visitas Das 18h até 8h</p>
                                    </div>
                                    <div className="colTow">
                                        <i className=""></i>
                                        <p className="info">Atendemos fim de semana</p>
                                    </div>
                                </div>
                                <button><img src={wpp} alt=""/> Entrar em contato</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}