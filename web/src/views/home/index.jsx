import React  from 'react'

import './style.css'
import Footer from './footer'
const num = [1,2,3,4,5,6,7,8]
export default function Home(){
    return(
        <>
        <h1>Home</h1>

        <a href="/login"><label>LOGIN</label></a>


            <div>{num.map((e)=>{
               return  <li>{e}</li>
            })}</div>


        <Footer>
        <strong>Ola</strong>
        </Footer>
        </>
    )

}