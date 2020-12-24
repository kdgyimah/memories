import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// Routes
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({  limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({  limit: '30mb', extended: true }));
app.use(cors());
// Use routes middleware
app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.MONGO_URI || 'mongodb+srv://ENTER_CREDENTIALS_HERE_FROM_YOUR_MONGODB_ACCOUNT';
const PORT = process.env.PORT || 5000;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true

}

// MongoClient
mongoose.connect(CONNECTION_URL, options)
    // When conncetion is successful
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error.message))

// Setting constraints to mongo db connection
// mongoose.set('useFindAndModify', false)