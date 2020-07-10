sap.ui.define([
	"UI5Day4/controller/BaseController",
	"sap/m/MessageToast",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/routing/History"
], function (BaseController, MessageToast, formatter, Filter, FilterOperator, History) {
	"use strict";
	return BaseController.extend("UI5Day4.controller.invDetail", {
		onInit: function () {
			debugger;
			var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("invDetail").attachPatternMatched(this._onObjectMathced, this);
		},
		// onNavBack: function () {
		// 	debugger;
		// 	var oHistory = History.getInstance();
		// 	var sPreviousHash = oHistory.getPreviousHash();
		// 	if (sPreviousHash !== undefined) {
		// 		window.history.go(-1);
		// 	} else {
		// 		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 		oRouter.navTo("invHome", true);
		// 	}
		// },
		_onObjectMathced: function (oEvent) {
			debugger;
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").inv),
				model: "inv"
			});
		}
	});
});