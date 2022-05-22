import Header from "../components/Header"
import Popular from "../components/Popular"
import Footer from "../components/Footer"
import Detail from "../components/Detail"
import {useParams} from 'react-router-dom'
import React from "react"

const Berita = () => {
    let {id} = useParams()
    return(
        <>
            <div className="App flex flex-row w-screen mt-5">
                <div className='w-1/12 '>
                </div>
                <div className='w-10/12 '>
                    <Header />
                    <div className='flex flex-row'>
                        <Detail id={id} />
                        <Popular />
                    </div>
                </div>
                <div className='w-1/12 '>
                </div >
            </div>
            <Footer />
        </>
    )
}

export default Berita