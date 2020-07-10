sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageToast"
], function (UIComponent, JSONModel, ResourceModel, MessageToast) {
	"use strict";
	return UIComponent.extend("UI5Day4.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// Set data model for view input.
			var invInput = {
				invInput: {
					invNumber: "",
					invType: "",
					compCode: ""
				}
			};
			var oModel = new JSONModel(invInput);
			this.setModel(oModel);
			this.getRouter().initialize();
			debugger;
			this.getRouter().attachBypassed(function (oEvent){
				var sHash=oEvent.getParameter("hash");
				console.log(sHash + "is not valid");
			});
				this.getRouter().attachRouteMatched(function (oEvent){
				var sHash=oEvent.getParameter("hash");
				console.log(sHash + "-----------------------is valid");
			});
		}
	});
});