(function(root, factory){
	var $;
	if(typeof exports === 'object'){
		try{ $ = require('jquery')}catch(e){};
		module.exports = factory($);
	}
	else if(typeof define === 'function' && define.amd){
		define(function(require){
			try{ $ = require('jquery')}catch(e){};
			return factory($)
		})
	}
	else{
		root.Canlerdar = factory(root.$)
	}
})(this, function($){
	var Canlerdar = function(){}

	Canlerdar.prototype = {
		constructor: Canlerdar,
		init: function(){
			
		}
	}
	return Canlerdar;
});