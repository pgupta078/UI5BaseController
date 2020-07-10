sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";
	return Controller.extend("UI5Day4.controller.BaseController", {
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},
		onBack: function () {
			debugger;
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
			//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.getRouter.navTo("invHome",{}, true);
			}
		}
	});
});