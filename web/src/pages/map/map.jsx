import React from 'react'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import '../../styles/pages/map.css'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Login() {

    return (
        <>
            <div id="page-map">
                <aside>
                    <header>
                        <img src={logo} alt="Happy" />
                        <h2>Escolha um orfanato do mapa</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p>
                    </header>
                    <footer>
                        <strong>Rio de Janeiro</strong>
                        <span>Barra Mansa</span>
                    </footer>
                </aside>

                <Map center={[-27.2092052,-49.6401092]} zoom={15} style={{ width: '100%', height: '100%' }}>
                    {/* <TileLayer url="http://a.title.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/ligth-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                </Map>



                <Link to="/" className="create-orphanage"><FiPlus size={32} color="#fff" /></Link>
            </div>

        </>
    )

}