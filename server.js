const express = require( "express" );
const mongoose = require( "mongoose" );
const morgan = require( "morgan" );
const bodyParser = require( "body-parser" );
const cors = require( "cors" );
require( "dotenv" ).config();
const { readdirSync } = require( "fs" ); // //file system module

//import routes
const authRoutes = require( "./routes_s/auth" )
// app
const app = express();

// db



//const conn = "mongodb+srv://plantexchange:plantexchange@cluster0.xsayc.mongodb.net/plantexchange?retryWrites=true&w=majority";


mongoose
	.connect( process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true
	} )
	.then( () => console.log( "DB CONNECTED" ) )
	.catch( ( err ) => console.log( "DB CONNECTION ERR", err ) );

// middlewares
app.use( morgan( "dev" ) );
app.use( bodyParser.json( { limit: "2mb" } ) );
app.use( cors() );

// route
//instead of loaidng each routes  loading all routes using fs
//the map function will return  each routes.
//this way we can avoid loading each routes individually
/*

The fs.readdirSync() method 
is used to synchronously read the contents 
of a given directory. 
The method returns an array with all the file names
or objects in the directory.
The options argument can be used 
to change the format in which the files are returned from the method.
fs.readdirSync( path, options )
*/

readdirSync( "./routes" ).map( ( r ) => app.use( "/api", require( "./routes/" + r ) ) )

// port
const port = process.env.PORT || 8000;

app.listen( port, () => console.log( `Server is running on port ${ port }` ) );

