sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";
	new ComponentContainer({
		name: "UI5Day4",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");

});