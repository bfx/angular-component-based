
/* Main page controller, coordinates all the other components  */
function MailController(AccountService, MessageService)
{
    this.defaultQuery = "js";
    

    
    this.messages = [];
    this.currentMessage = null; 

    //TODO load data from services (or backend)
    this.folders = [
        "Inbox",
        "Trash",
        "Sent"
    ];
    this.customFolders = [
        "Angular",
        "Typescript",
    ];
    this.defaultFolder = 'Inbox';
    
        //TODO load messages list from service
    function loadInbox(){ 
        return MessageService.getMessages();
    };

    this.messages = loadInbox(); 
    this.currentMessage = this.messages[0];

    this.selectFolder = function (folderName) {
        this.messageListTitle = folderName;
        
        if ("Inbox" == folderName)
        {
            this.messages = loadInbox();
            return;
        }   
        //TODO load data from services (or backend)
        
        this.messages = MessageService.getMessagesByFolder(folderName);
    };

    this.selectCurrentMessage = function (message)
    {
        this.currentMessage = message; 
    };

    this.delete = function (message) {
        //TODO remove message from this.messages...
    };

    this.replyTo = function (message){
        //TODO optional lab: delegate reply to MessageReplyService

        //TODO create a template message for the reply (switch sender and receiver, add "Re: ", add ">" to body)
        var template = {
            //TODO

        };
        this.compose(template);
        
    };

    this.forward = function (message){
        //TODO optional lab:
        
    };

        //TODO discuss if initialize the sender here or in the composer    
    this.draft = {
        from : AccountService.getAccountEmail()
    };

    this.send = function (message) {
        this.closeComposer(); 
        //TODO add to sent
    };
    
    this.closeComposer = function () {
        this.composerActive = false; 
    };
    
    this.compose = function (template) {
    
        if (template) {
            this.draft.to = template.to;
            this.draft.subject = template.subject;
            this.draft.body = template.body; //TODO advanced add signature 
        } 
        this.composerActive = true; 
    };

    
}

angular.module("mailApp")
    .controller("MailController", MailController);

