function userController($scope) {
$scope.hTeam = '';
$scope.aTeam = '';
$scope.utfall = '';
$scope.tipser = '';
$scope.innsats = '';
$scope.odds = '';
$scope.resultat = '';
$scope.bets = [
{id:1, hTeam:'Hege',  aTeam:"Pege", innsats:"20", odds:"1.40", resultat:"2-1" },
{id:2, hTeam:'Kim',   aTeam:"Pim" },
{id:3, hTeam:'Sal',   aTeam:"Smith" },
{id:4, hTeam:'Jack',  aTeam:"Jones" },
{id:5, hTeam:'John',  aTeam:"Doe" },
{id:6, hTeam:'Peter', aTeam:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.hTeam = '';
    $scope.aTeam = '';
    } else {
    $scope.edit = false;
    $scope.hTeam = $scope.bets[id-1].hTeam;
    $scope.aTeam = $scope.bets[id-1].aTeam;
  }
};
/*
$scope.$watch('utfall',function() {$scope.test();});
$scope.$watch('tipser',function() {$scope.test();});
$scope.$watch('hTeam', function() {$scope.test();});
$scope.$watch('aTeam', function() {$scope.test();});

$scope.test = function() {
  if ($scope.utfall !== $scope.tipser) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  <!--if ($scope.edit && (!$scope.hTeam.length ||
  !$scope.aTeam.length ||
  !$scope.utfall.length || !$scope.tipser.length)) {
       $scope.incomplete = true;
  }-->
};
*/
$scope.calculateAmount = function() {
if($scope.innsats = '20'){
    $scope.tipser = 'YOLO';
}
};
}


<script>
var helloApp = angular.module("helloApp", []);
helloApp.controller("CompanyCtrl", function($scope) {
$scope.companies = [
                    { 'name':'Infosys Technologies',
                    	'employees': 125000,
                    	'headoffice': 'Bangalore'},
                    	{ 'name':'Cognizant Technologies',
	                    	'employees': 100000,
	                    	'headoffice': 'Bangalore'},
	                    	{ 'name':'Wipro',
		                    	'employees': 115000,
		                    	'headoffice': 'Bangalore'},
		                    	{ 'name':'Tata Consultancy Services (TCS)',
			                    	'employees': 150000,
			                    	'headoffice': 'Bangalore'},
			                    	{ 'name':'HCL Technologies',
				                    	'employees': 90000,
				                    	'headoffice': 'Noida'},
                    ];
$scope.addRow = function(){
	$scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
	$scope.name='';
	$scope.employees='';
	$scope.headoffice='';
};
)};
</script>