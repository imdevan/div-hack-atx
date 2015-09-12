console.log('called');

var s, scrollapp = {
	vars: {
		scrollpos: 0,
		prevScrollPos: 0,
		nav: $('#nav')
	},
	init: function (){
		s = this.vars;
		this.checkWindowPosition();
	},
	checkWindowPosition: function() {
		setInterval(function(){ 
			if($(window).scrollTop() < s.prevScrollPos){
				s.nav.removeClass('hide');
			}else if($(window).scrollTop() > s.prevScrollPos && $(window).scrollTop() > s.nav.outerHeight()){
				s.nav.addClass('hide');
			}
			s.prevScrollPos = $(window).scrollTop();
		}, 50);
	}
};

scrollapp.init();