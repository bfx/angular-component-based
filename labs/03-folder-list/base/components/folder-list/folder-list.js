//component name - component definition object
angular.module("mailApp").component("TODO component name",{
    templateUrl : "components/folder-list/folder-list.html",
    controller: "", //TODO component controller name,
    controllerAs: "TODO ALIAS", 
    
    //they are applied as fields in the controller object
    bindings: {
        //name of the field in the controller = name of the attribute in the html
        
        //TODO bind folder list parameter

        //? means optional
        //TODO bind title parameter 
        
        //TODO bind onSelect callback
        
        //TODO optional bind allowCreate: "@",
        onAddNew: "&"
    } 
    
});

function FolderListController()
{
    if (!this.title)
        this.title ="Folder list";
        
    
    this.addFolder = function (newFolderName) {
        //TODO add folder to list
        //TODO notify parent with event
    };
    
    this.select = function (folder)
    {
        //update current folder locally
        this.currentFolder = folder; 

        //TODO notify parent component 

    };
    
    if (this.defaultFolder)
    {
        this.select(this.defaultFolder);
    }

}

