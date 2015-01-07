
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

        $(window).on('scroll', function() {
            navApp.stickyMenu();
        })
    },

    toggleMenu : function(el) {

        var $el      = $(el),
        toggleState  = $el.data('toggle'),
        toggleTarget = $($el.data('target')); 

        if (toggleState === 'collapsed') { 
            $el.data('toggle', 'expanded');
            toggleTarget.slideDown();
        } else {
            $el.data('toggle', 'collapsed');
            toggleTarget.slideUp();
        }   
    },

    stickyMenu : function() {

        var $nav = $('.navbar'),
            navHeight = $nav.outerHeight();
               
        if ($(window).scrollTop() > navHeight ) {
            if ($nav.data('position') == 'static') {
                $nav.data('position', 'fixed');
                $nav.css({
                    'position' : 'fixed',
                    'top' : 0,
                    'display' : 'none'
                }).slideDown();
            }
        } else {
            if ($nav.data('position') == 'fixed') {
                $nav.data('position', 'static');
                $nav.css({
                    'position' : 'static',
                    'display' : 'block'
                });
            }
        }
    }
    
};

navApp.init();

$('.fixedButton').on('click', function() {
    $('.navbar').css({
        'display' : 'none'
    });
    
    $('.navbar').slideDown();
   
   
})




});