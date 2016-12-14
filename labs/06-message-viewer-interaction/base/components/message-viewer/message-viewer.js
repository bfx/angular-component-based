//component name - component definition object
angular.module("mailApp").component("messageViewer",{
    templateUrl : "components/message-viewer/message-viewer.html",
    controller: MessageViewerController,
    controllerAs: "messageViewerCtrl", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        message : "<message",  //mandatory
        //TODO BIND EVENTS replay, forward, delete
    }
    
});

function MessageViewerController() {



}