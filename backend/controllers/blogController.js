import Blog from "../models/Blog.js";

export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.json(blog)
    } catch(err) {
        res.json({message: err.message})
    }
}

export const getBlogById = async (req, res) => {
    const cekId = await Blog.findById(req.params.id)
    if(!cekId) return res.json({message: 'berita tidak ada'})
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const search = async (req, res) => {
    try {
        const blog = await Blog.findOne({"category" : req.body['category']})
        res.json({blog})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const setBlog = async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const category = req.body.category
    const image = req.file.path
    const blog = new Blog({
        title,
        image,
        description,
        category
    })
    try {
        const set = await blog.save()
        res.json("oke")
    } catch (error) {
        res.json({message: error.message})
    }
}

export const delBlog = async (req, res) => {
    try {
        const del = await Blog.deleteOne({_id: req.params.id})
        res.json("oke")
    } catch (error) {
        res.json({message: error.message})
    }
}