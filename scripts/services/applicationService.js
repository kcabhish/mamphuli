angular.module("cubicApp").service("applicationService",function(){
   this.applicationList =[
        {
            'name':'Home',
            'path':'views#!/home',
            'imagepath': '/static_files/svg/home.svg',
            'previlege':[]
        },
        {
            'name':'Recruiting Sites',
            'path':'views#!/application/recruitingSites',
            'imagepath': '/static_files/svg/domain-registration.svg',
            'previlege':[]
        },
        {
            'name':'Statistics',
            'path':'views#!/application/statistics',
            'imagepath': '/static_files/svg/stats.svg',
            'previlege':[]
        }
    ];    
    console.log(this.applicationList);
});