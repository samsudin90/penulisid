import { AiFillCalendar } from 'react-icons/ai'
import { FiUser, FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/blog").then((d) => {
            this.setState({data: d.data})
            console.log(d)
        })
    }

    render() {


        const Berita = this.state.data.map((d, id) => {
            return(
                <>
                
                <div className="flex flex-col" key={id} >
                    <img src={`http://localhost:5000/${d.image}`} alt="dd" />
                    <Link to={`/news/${d._id}`} >
                        <h1 className='mt-3 font-medium text-lg' >{d.title}</h1>
                    </Link>
                    <div className='flex flex-row mt-3 text-gray-500 justify-between' >
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <AiFillCalendar />
                            <p>2022</p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <FiUser />
                            <p>penulis</p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <FiMessageSquare />
                            <p>comment</p>
                        </div>
                    </div>
                    <p className='capitalize mt-3 mb-5 text-left' >
                        {d.description}
                    </p>
                </div>
                </>
            )
        })

        return (
            <div className="mt-5 flex flex-start flex-row w-4/5 mb-11 gap-4" >
                <div className='w-full' >
                    {Berita}
                </div>
            </div>
        )
    }
}

export default Blog