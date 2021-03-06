;(function($, window, document, undefined) {

	"use strict";

	// This is the name of the plugin to be used like this:
	// $('selector').pluginName();
	var pluginName = "tcgElevator";
	// Create the defaults once
	var defaults = {
		toggleSelector: '.elevator-toggle',
		contentSelector: '.elevator-content'
	};

	// The actual plugin constructor
	function Plugin (element, options)
	{
		// make "this" a unique var
		var _this = this;
		// store the DOM element for global usage
		var _element = element;
		// store the jQuery version of the DOM element for global usage
		var _$element = $(element);
		// merge user defined options with the defaults
		var _settings = $.extend({}, defaults, options);

		var toggle = _$element.find(_settings['toggleSelector']);
		var content = _$element.find(_settings['contentSelector']);

		// initialize the plugin by calling the init() method
		init();

		function init()
		{
			// business logic for initialization
			toggle = _$element.find(_settings['toggleSelector']);
			content = _$element.find(_settings['contentSelector']);
			content.hide();
		}

		// place all your other private functions here

		// public functions
		_this.open = function()
		{
			content.slideDown();
		}
		_this.close = function()
		{
			content.slideUp();
		}

	}

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function() {
		var args = arguments;
		return this.each(function() {
			if (!$.data(this, pluginName + '_instance'))
			{
				// create and save the plugin instance
				$.data(this, pluginName + '_instance', new Plugin(this, args[0]));
			}
			// if public functions are needed, use this block aswell.
			// those functions can then be called by $('selector').pluginName('functionName', ...args)
			else
			{
				// get the current plugin instance
				var _this = $.data(this, pluginName + '_instance');

				// check if the user intends to call a function and
				// isolate the function arguments (performance optimized)
				if(typeof args[0] === 'string' && typeof _this[args[0]] === 'function')
				{
					var functionArgs = [];
					for(var i = 1; i < args.length; i++)
					{
						functionArgs.push(args[i]);
					}
					_this[args[0]].apply(_this, functionArgs);
				}
			}
		});
	};
})(jQuery,window, document);
