(function(ng) {'use strict'; //NOSONAR
	
    ng
        .module('app-mock', ['ngMockE2E', 'app'])
        // Faut {"success":true}
        .run(['$httpBackend', function($httpBackend) {
        	var obj = JSON.parse('{"success":true}');
        	obj.success = true;        	        	
        	//convert object to json string
        	var string = JSON.stringify(obj);
        	
            function match(urlToMatch) {
                return function(url) {
                    return url.indexOf(urlToMatch) >= 0;
                }
            }          
            $httpBackend.whenGET().passThrough();			
            $httpBackend.whenPOST().passThrough();
        }]);
}(angular));
