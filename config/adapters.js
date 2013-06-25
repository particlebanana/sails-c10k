// Configure installed adapters
// If you define an attribute in your model definition,
// it will override anything from this global config.
module.exports.adapters = {

	// If you leave the adapter config unspecified
	// in a model definition, 'default' will be used.
	'default': 'memory',

	// In-memory adapter for DEVELOPMENT ONLY
	memory: {
		module: 'sails-memory'
	}

};
