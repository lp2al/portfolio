(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])