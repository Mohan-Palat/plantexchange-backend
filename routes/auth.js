const express = require( "express" )

const router = express.Router();

router.get( "/create-or-update-user", ( req, res ) => {

	res.json( {

		data: "this is just testing"
	} )
} )

module.exports = router;