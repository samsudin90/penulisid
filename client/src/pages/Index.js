import Header from "../components/Header"
import Slider from "../components/Slider"
import Blog from "../components/Blog"
import Popular from "../components/Popular"
import Footer from "../components/Footer"

const Index = () => {
    return (
        <>
            <div className="App flex flex-row w-screen mt-5">
                <div className='w-1/12 '>

                </div>
                <div className='w-10/12 '>
                    <Header />
                    <Slider />
                    <div className='flex flex-row'>
                        <Blog />
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

export default Index