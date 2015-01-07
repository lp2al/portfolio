
$(document).ready(function() {

/* Responsive Navigation */
var navApp = {
    init : function() {
        this.bindEvents();
    },

    bindEvents : function() {
        $('.navbar-toggle').on('click', function() { 
            navApp.toggleMenu(this); }
        );
    },

    toggleMenu : function(el) {

        var $el      = $(el),
        toggleState  = $el.data('toggle'),
        toggleTarget = $($el.data('target')); 

        if(toggleState === 'collapsed') { 
            $el.data('toggle', 'expanded');
            toggleTarget.slideDown();
        } else {
            $el.data('toggle', 'collapsed');
            toggleTarget.slideUp();
        }   
    }
    
};

navApp.init();


});