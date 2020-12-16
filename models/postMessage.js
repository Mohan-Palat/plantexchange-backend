const mongoose = require( "mongoose" );
const postSchema = new mongoose.Schema( {
	title: String,
	message: String,
	creator: String,
	selectedFile: { type: Array },
	createdAt: {
		type: Date,
		default: new Date()
	}
} );

const PostGarden = mongoose.model( "PostGarden", postSchema );


module.exports = mongoose.model( "PostGarden", postSchema );