angular.module('ngCheckbox')
    .directive('ngCheckbox2', function (ngCheckboxStatistics) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                head:'=',
                id: '@',
                superGroup: '@',
                groups: '=',
                ngModel:'=?ngModel',
                sum:'=',
                count:'@',
                unit:'@'
            },
            templateUrl: 'ngCheckbox/ngCheckbox.tpl.html',
            controllerAs:'checkboxCtrl',
            controller: 'NgCheckboxController2',
            link: function (scope, element, attrs, checkboxCtrl) {
                // Only register checkbox if it belongs to a group
                if(checkboxCtrl.groups){
                    ngCheckboxStatistics.registerCheckboxCtrl(checkboxCtrl);
                }

                scope.$watch('ngModel', function (value) {
                    checkboxCtrl.setValue(value);
                });

                scope.$on('$destroy', function () {
                    if(checkboxCtrl.groups){
                        ngCheckboxStatistics.unregisterCheckboxCtrl(checkboxCtrl);
                    }
                });
            }
        };
    });