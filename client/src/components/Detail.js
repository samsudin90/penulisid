import foto from "../122.jpg"
import { AiFillCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import {FaFacebookSquare, FaLine, FaLinkedin, FaPinterestSquare, FaRedditSquare, FaTelegram} from 'react-icons/fa'
import React, { Component } from "react"
import axios from "axios"

class Detail extends Component {

    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount(){
        // console.log(this.props.id)
        axios.get(`http://localhost:5000/blog/${this.props.id}`).then((da) => {
            this.setState({
                news: da.data
            })
        })
    }

    render(){
    return(
        <div className="mt-3 w-full" >
            <h1 className="text-left text-xl capitalize" >{this.state.news['title']}</h1>
            <div className="mt-1 flex flex-row gap-6 text-gray-500 text-sm">
                <div className="flex flex-row gap-2 items-center">
                    <AiFillCalendar/>
                    <p>April, 4 2022</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <FiUser/>
                    <p>Andhika Dwi</p>
                </div>
            </div>
            <img className="bg-cover w-11/12 my-4" alt="fg" src={foto} />
            <div className="flex flex-start flex-row gap-1 text-2xl mb-3 text-gray-700" >
                <FaFacebookSquare/>
                <FaLine/>
                <FaLinkedin/>
                <FaPinterestSquare/>
                <FaRedditSquare/>
                <FaTelegram/>
            </div>
            <p className="text-left mb-3" >
                {this.state.news['description']}
            </p>
        </div>
    )
}
}

export default Detail