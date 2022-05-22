import logo from '../logo-kecil.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="" >
            <div className='flex flex-row justify-between' >
            <Link to="/">
                <img src={logo} alt="penulis" />
            </Link>
            <Link to="/add">
                <p className='px-4 hover:bg-red-500 hover:cursor-pointer items-center justify-center h-10 text-white rounded-sm w-40 pt-2 bg-red-400 uppercase font-bold' >Add News</p>
            </Link>
            </div>
            <div className='mt-5 h-10 flex w-full item-start bg-black'>
                <p className='bg-red-500 px-4 pt-2 text-white uppercase font-bold' >Blog Home</p>
                <p className='px-4 hover:bg-red-500 hover:cursor-pointer pt-2 text-white uppercase font-bold' >Digital marketing</p>
                <p className='px-4 hover:bg-red-500 hover:cursor-pointer pt-2 text-white uppercase font-bold' >inbound marketing</p>
                <p className='px-4 hover:bg-red-500 hover:cursor-pointer pt-2 text-white uppercase font-bold' >social media</p>
            </div>
        </div>
    )
}

export default Header