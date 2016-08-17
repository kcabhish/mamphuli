angular.module("cubicApp").service("navBarService",function(){
   /*
   This variable will store the menu items.
   The object should have a name and previlege.
   The previlge property will determine weather 
   it should be displayed in the menu or not based upon
   the user login credentials.
   */
    this.menuBarItems = [{
            'name':'Home',
            'path':'views#!/home',
            'previlege':[]
        },
        {
            'name':'Classes',
            'path':'views#!/classes',
            'previlege':[]
        },
        {
            'name':'Employees',
            'path': 'views#!/employees',
            'previlege':[]
        },
        {
            'name':'Consultants',
            'path': 'views#!/consultants',
            'previlege':[]
        },
        {
            'name':'Interviews',
            'path': 'views#!/interviews',
            'previlege':[]
        },
         {
            'name':'Inventory',
            'path': 'views#!/inventory',
            'previlege':[]
        }];
                
                        
   });