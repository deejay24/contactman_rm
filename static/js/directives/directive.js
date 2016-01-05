'use strict';

angular
    .module('redmart')
    .directive('allowPattern', [allowPatternDirective]);
                                   
    function allowPatternDirective() {
        return {
            restrict: "A",
            compile: function(tElement, tAttrs) {
                return function(scope, element, attrs) {
                    element.bind("keypress", function(event) {
                        var keyCode = event.which || event.keyCode; 
                        var keyCodeChar = String.fromCharCode(keyCode); 
                        if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
                            event.preventDefault();
                            return false;
                        }
              
                    });
                };
            }
        };
    }