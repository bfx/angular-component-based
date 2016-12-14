//component name - component definition object
angular.module("mailApp").component("messageList",{
    templateUrl : "components/message-list/message-list.html",
    controller: MessageListController,
    controllerAs: "messageListCtrl", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        messages : "<messages",  //mandatory

        title: "<", //equivalent to "<title",

        onCurrentMessageChanged: "&"
        
    } 
    
});

function MessageListController() {
    if (!this.messages)
    {
        this.messages = [];
    }
    
    this.setCurrentMessage = function(index)
    {
        this.currentMessage = this.messages[index];
        this.currentMessageIndex = index; 

        this.onCurrentMessageChanged({
            message: this.currentMessage
        });
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
    
    this.$onChanges = function (changes){
        if (changes.messages)
        {
            this.currentMessageIndex = 0;
        
            if (this.messages && this.messages.length)
                this.setCurrentMessage(this.currentMessageIndex);
        }
    }


}