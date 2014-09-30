module.exports = eachCSV;

/** match every comma-separated element ignoring 1-level parenthesis, e.g. `1,2(3,4),5` */
var commaMatchRe = /(,[^,]*?(?:\([^()]+\)[^,]*)?)(?=,|$)/g;

/** iterate over every item in string */
function eachCSV(str, fn){
	if (!str) return;

	//force string be primitive
	str += '';

	var list = (',' + str).match(commaMatchRe) || [''];
	for (var i = 0; i < list.length; i++) {
		// console.log(matchStr)
		var matchStr = list[i].trim();
		if (matchStr[0] === ',') matchStr = matchStr.slice(1);
		matchStr = matchStr.trim();
		fn(matchStr, i);
	}
};