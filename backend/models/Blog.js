import Mongoose from "mongoose";

const Blog = Mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    }
})

export default Mongoose.model('Blog', Blog)