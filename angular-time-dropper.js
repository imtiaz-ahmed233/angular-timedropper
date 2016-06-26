// Source: https://github.com/pinrostudio/angular-timedropper
angular.module('angular-timedropper', []).directive('timeDropper', function() {
	return{
        scope:{'onChange':'=' },
        link: function(scope, elm, attr){
            var options = 
            {
                    format: attr.format,
                    autoswitch: attr.autoSwitch,
                    meridians: attr.meridians,
                    mousewheel: attr.mouseWheel,
                    setCurrentTime: attr.setCurrentTime,
                    init_animation: attr.initAnimation,
                    primaryColor: attr.primaryColor,
                    borderColor: attr.borderColor,
                    backgroundColor: attr.backgroundColor,
                    textColor: attr.textColor
            };
           
            elm.timeDropper(options);
            function currentValue(){
               return elm[0].value; 
            }
             scope.onChange = currentValue();
             $('.td-overlay,.td-clock,.td-select').bind('touchend mouseup mousewheel', function() {
                                
                if( scope.onChange !== currentValue ) {
                    scope.$apply(function() {
                        scope.onChange = currentValue();
                    });
                }
            });

        }
    };
});