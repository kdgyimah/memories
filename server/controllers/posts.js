import PostMessage from '../models/postMessage.js'

export const getPosts = async (request, response) => {
    try {
        const postMessages = await PostMessage.find();
        console.log('Post messages Array', postMessages);
        response.status(200).json(...postMessages, 'Posts Array');
        // response.send('Heyo, the router works and we are  getting the posts now');
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
};

export const addPost = async (request, response) => {
    // Retrieve post from the frontend
    const post = request.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        // Successfully created
        response.status(201).json(newPost)
    } catch (error) {
        // Conflict
        response.status(409).json({ message: error.message });
    }
};