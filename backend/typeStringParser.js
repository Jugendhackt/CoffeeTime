const parser = function(art) {
	if (art == 0) {
		return "Kaffee";
	} else if (art == 1) {
		return "Kakao";
	} else if (art == 2) {
		return "Tee";
	} else {
		return "UKG";
	}
}

module.exports = parser;