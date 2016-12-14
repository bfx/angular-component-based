//component name - component definition object
angular.module("mailApp").component("TODO COMPONENT NAME",{
    templateUrl : "components/message-list/message-list.html",
    controller: MessageListController,
    controllerAs: "TODO COMPONENT ALIAS", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        //TODO BIND MESSAGE LIST PARAMETER

        //TODO BIND title PARAMETER
    
        //TODO BIND current MESSAGE change callback
        
        //TODO ADVANCED - implement multiple message selection
        
    } 
    
});

function MessageListController() {
    if (!this.messages)
    {
        this.messages = [];
    }
    
    this.setCurrentMessage = function(index)
    {
        //update local state
        this.currentMessage = this.messages[index];
        this.currentMessageIndex = index; 

        //TODO implement notification to parent controller

    }

    this.next = function () {
        
        if (this.currentMessageIndex < this.messages.length -1)
            this.currentMessageIndex++;

        this.setCurrentMessage(this.currentMessageIndex);
    };

    this.prev = function () {        
        if (this.currentMessageIndex >0)
            this.currentMessageIndex--;

        this.setCurrentMessage(this.currentMessageIndex);
    };


}