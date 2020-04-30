sap.ui.define([], function () {
	"use string";

	return {
		apply: function (sHouse, sStreet, sCity, staticMap, skey) {
			var sSrc = "";
			var key = skey;
			var staticmap = staticMap;
			var fullAddress = sHouse + sStreet + sCity;
			var size = "400x400";
			var zoom = "13";
			var maptype = "roadmap";
			var markers = "size:mid%7Ccolor:0xff0000%7Clabel:1%7C";

			sSrc = staticmap + "key=" + key + "&center=" + fullAddress +
				"&zoom=" + zoom + "&scale=false" + "&size=" + size + "&maptype=" + maptype +
				"&markers=" + markers + fullAddress;

			return sSrc;
		}
	};
});