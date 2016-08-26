angular.module("cubicApp").service("navBarService",function(){
   /*
   This variable will store the menu items.
   The object should have a name and previlege.
   The previlge property will determine weather 
   it should be displayed in the menu or not based upon
   the user login credentials.
   */
    this.menuBarItems = [{
            'id':'1',
            'name':'Home',
            'path':'#!/home',
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[],
            'class':'active'
        },
        {
            'id':'2',
            'name':'Classes',
            'path':'#!/classes',
            'imagepath': '/static_files/svg/class.svg',
            'previlege':[],
            'class':'inactive'
        },
        {
            'id':'3',
            'name':'Employees',
            'path': '#!/employees',
            'imagepath': '/static_files/svg/employee2.svg',
            'previlege':[],
            'class':''
        },
        {
            'id':'4',
            'name':'Consultants',
            'path': '#!/consultants',
            'imagepath': '/static_files/svg/consultants.svg',
            'previlege':[],
            'class':''
        },
        {
            'id':'5',
            'name':'Interviews',
            'path': '#!/interviews',
            'imagepath': '/static_files/svg/interview.svg',
            'previlege':[],
            'class':''
        },
        {
            'id':'6',
            'name':'Inventory',
            'path': '#!/inventory',
            'imagepath': '/static_files/svg/inventory.svg',
            'previlege':[],
            'class':''
        },{
            'id':'7',
            'name':'Application',
            'path': '#!/application',
            'imagepath': '/static_files/svg/application.svg',
            'previlege':[],
            'class':''
        }              
        ];
    //Variable to determine which nav bar is selected
    this.currentSelection = 1;
    
    //Function to toggle the active status in the menu bar
    this.toggleSelection = function(newId){
        this.menuBarItems[this.currentSelection-1].class = 'inactive';
        this.menuBarItems[newId-1].class = 'active';
        this.currentSelection = newId;
    }
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
            'path':'#!/classes/session',
            'imagepath': '/static_files/svg/classsession.svg',
            'previlege':[]
        },
        {
            'name':'Instructors',
            'path':'#!/classes/instructor',
            'imagepath': '/static_files/svg/instructors.svg',
            'previlege':[]
        }
    ];    
                        
   });