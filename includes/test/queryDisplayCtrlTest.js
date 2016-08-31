
describe('filterresultcardTest', function () {
   beforeEach(module('mindMap'));
   var $scope;

   describe('filterresultcardddirective', function () {
       var scope, $compile;
       beforeEach(inject(function (_$rootScope_, _$compile_, $injector) {
           scope = _$rootScope_;
           $compile = _$compile_;
           $httpBackend = $injector.get('$httpBackend');
           $httpBackend.expectGET('includes/views/filterResultCard.html')
           .respond(200);
       }));

       describe('testFilter', function () {
           var element;
           beforeEach(function () {
               element = $compile(' <filter-result-card></filter-result-card>')(scope);
               angular.element(document.body).append(element);
           });


           it('test', function () {
               element.find("<md-button>").triggerHandler("click");
           });
       });
   });
});
