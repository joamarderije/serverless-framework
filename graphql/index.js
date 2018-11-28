var mgs = require('merge-graphql-schemas');
var fileLoader = mgs.fileLoader;
var mergeTypes = mgs.mergeTypes;

var path = require('path');
var fs = require('fs');
const FILENAME = './schema.graphql';

fs.unlink(FILENAME, function(err) {
});
var typesArray = fileLoader(path.join(__dirname, './**/*.graphql'), { recursive: true });
var typeDefs = mergeTypes(typesArray, { all: true });
fs.writeFileSync(FILENAME, typeDefs);

module.exports = typeDefs;
