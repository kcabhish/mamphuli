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
            'path':'#!/home',
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[]
        },
        {
            'name':'Classes',
            'path':'#!/classes',
            'imagepath': '/static_files/svg/class.svg',
            'previlege':[]
        },
        {
            'name':'Employees',
            'path': '#!/employees',
            'imagepath': '/static_files/svg/employee2.svg',
            'previlege':[]
        },
        {
            'name':'Consultants',
            'path': '#!/consultants',
            'imagepath': '/static_files/svg/consultants.svg',
            'previlege':[]
        },
        {
            'name':'Interviews',
            'path': '#!/interviews',
            'imagepath': '/static_files/svg/interview.svg',
            'previlege':[]
        },
        {
            'name':'Inventory',
            'path': '#!/inventory',
            'imagepath': '/static_files/svg/inventory.svg',
            'previlege':[]
        },{
            'name':'Application',
            'path': '#!/application',
            'imagepath': '/static_files/svg/application.svg',
            'previlege':[]
        }              
        ];
    
    this.classDashboardItems = [
        {
            'name':'Home',
            'path':'#!/home',
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[]
        },
        {
            'name':'Class List',
            'path':'#!/classes/classlist',
            'imagepath': '/static_files/svg/classlist.svg',
            'previlege':[]
        },
        {
            'name':'Class Sessions',
            'path':'#!/classes',
            'imagepath': '/static_files/svg/classsession.svg',
            'previlege':[]
        },
        {
            'name':'Instructors',
            'path':'#!/classes',
            'imagepath': '/static_files/svg/instructors.svg',
            'previlege':[]
        }
    ];    
                        
   });