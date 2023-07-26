<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:unified="sap.ui.unified">
  <FileUploader
    id="fileUploader"
    name="fileUploader"
    buttonText="Upload"
    fileType="any"
    change="onFileSelect"
  />
</mvc:View>



sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("your.namespace.ControllerName", {
    onInit: function() {
      // Initialize your model if needed
      // var oModel = new JSONModel();
      // this.getView().setModel(oModel);
    },

    onFileSelect: function(oEvent) {
      var oFileUploader = oEvent.getSource();
      var file = oEvent.getParameter("files")[0];

      var reader = new FileReader();
      reader.onload = function(e) {
        var base64String = btoa(e.target.result);
        // Now 'base64String' contains the file content in base64-encoded format (xString).
        // You can pass this string to the SAP Gateway service.
        
        // Example: Call a function to upload the file content to the SAP Gateway service
        // this.uploadToGatewayService(base64String);
      }.bind(this);

      reader.readAsBinaryString(file);
    },

    // Implement your function to upload 'base64String' to the SAP Gateway service
    // uploadToGatewayService: function(base64String) {
    //   ...
    // }
  });
});
