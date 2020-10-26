const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// New Post Schema
const PostSchema = new Schema({
    // Reference/Connect a particular User to the Post schema
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        {
            // To see which User liked which Post
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            // To see which User commented on which Post
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    // Date of the Post
    date: {
        type: Date,
        default: Date.now
    }
});

// Export the Post Model
module.exports = Post = mongoose.model('post', PostSchema);