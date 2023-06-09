import Post from '../model/post.js'

const getPosts = async (req, res) => {
    try{
        const posts = await Post.find()

        console.log(posts)
        res.status(200).json(posts)
    }
    catch (error){
        res.status(404).json({'message': error.message})
    }
    
}

const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post(post)

    try{
        await newPost.save()

        res.status(201).json(newPost)
    }
    catch (error){
        res.status(404).json({'message': error.message})
    }    
}


export {getPosts, createPost}