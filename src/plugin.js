import templates from './templates'


(function($){
	$.fn.extend({
            styleguide: path => templates.getByPath(path)
        });
})(jQuery);