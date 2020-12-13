var admin = require( "firebase-admin" );

var serviceAccount = require( "../config/fbServiceAccountKey.json" );

admin.initializeApp( {
	credential: admin.credential.cert( serviceAccount ),
	databaseURL: "https://gardenexchange-c6440-default-rtdb.firebaseio.com"
} );

module.exports = admin;