// load dependencies
require("./code/load")("code/ancestry.js", "code/chapter/mother_child_age_difference.js", "code/intro.js");

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
