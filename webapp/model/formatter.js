sap.ui.define([], function () {
	"use string";

	return {
		delivery: function (sMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRes = "";

			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sRes = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sRes = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sRes = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sRes;

		}
	};
});