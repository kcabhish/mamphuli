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
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[]
        },
        {
            'name':'Classes',
            'path':'views#!/classes',
            'imagepath': '/static_files/svg/class.svg',
            'previlege':[]
        },
        {
            'name':'Employees',
            'path': 'views#!/employees',
            'imagepath': '/static_files/svg/employee.svg',
            'previlege':[]
        },
        {
            'name':'Consultants',
            'path': 'views#!/consultants',
            'imagepath': '/static_files/svg/consultants.svg',
            'previlege':[]
        },
        {
            'name':'Interviews',
            'path': 'views#!/interviews',
            'imagepath': '/static_files/svg/interview.svg',
            'previlege':[]
        },
        {
            'name':'Inventory',
            'path': 'views#!/inventory',
            'imagepath': '/static_files/svg/inventory.svg',
            'previlege':[]
        }];
    
    this.classDashboardItems = [
        {
            'name':'Home',
            'path':'views#!/home',
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[]
        },
        {
            'name':'Class List',
            'path':'views#!/classes',
            'imagepath': '/static_files/svg/classlist.svg',
            'previlege':[]
        },
        {
            'name':'Class Sessions',
            'path':'views#!/classes',
            'imagepath': '/static_files/svg/classsession.svg',
            'previlege':[]
        },
        {
            'name':'Instructors',
            'path':'views#!/classes',
            'imagepath': '/static_files/svg/instructors.svg',
            'previlege':[]
        }
    ];    
                        
   });