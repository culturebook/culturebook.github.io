/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function l(a){"string"===typeof a&&this.parse(a);return this}function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);
var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);
return g(a,"ms")}d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]=
"";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||
new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");
f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=
g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));
a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,
b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);
b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&
(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);

/*jQuery Cookie set - https://github.com/carhartl/jquery-cookie */
(function(a,b,c){function e(a){return a}function f(a){return decodeURIComponent(a.replace(d," "))}var d=/\+/g;var g=a.cookie=function(d,h,i){if(h!==c){i=a.extend({},g.defaults,i);if(h===null){i.expires=-1}if(typeof i.expires==="number"){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}h=g.json?JSON.stringify(h):String(h);return b.cookie=[encodeURIComponent(d),"=",g.raw?h:encodeURIComponent(h),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}var l=g.raw?e:f;var m=b.cookie.split("; ");for(var n=0,o;o=m[n]&&m[n].split("=");n++){if(l(o.shift())===d){var p=l(o.join("="));return g.json?JSON.parse(p):p}}return null};g.defaults={};a.removeCookie=function(b,c){if(a.cookie(b,c)!==null){a.cookie(b,null,c);return true}return false}})(jQuery,document)

var _ = {};
_.IE6 = $('html').hasClass('ie6');
_.IE7 = $('html').hasClass('ie7');
_.IE8 = $('html').hasClass('ie8');
_.IE9 = $('html').hasClass('ie9');
_.nonResponsive = $('html').hasClass('ie6 ie7 ie8');
_.touchDevice = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);
var marginTop = $('.tiles').find('li').height();

function flexSlider(){
	/*$(window).resize(function() {
		var width = $(document).width();
		if( width < 300 ){
			$('.highlighted').addClass('flexslider-1');	
			$('.highlighted > ul').addClass('slides');	
			flexSlider()
		} else {
			$('.highlighted').removeClass('flexslider-1');	
			$('.highlighted > ul').removeClass('slides');	
			$('.highlighted').removeClass('.flex-viewport')
			$('.flex-direction-nav').remove();
		}
	})*/
	
	if(!_.touchDevice ){
		$('.flexslider-1').flexslider({
			animation: "slide",
			animationSpeed: 500,
			slideshowSpeed: 3000,
			controlNav: false,
			directionNav: true,
			itemMargin:10,
			useCSS : false,
			itemWidth:80,  
			move: 2, 
			start: function(slider){
				$('html').removeClass('loading');
			}
		});	
	} else {
		$('.flexslider-1').flexslider({
			animation: "slide",
			animationSpeed: 500,
			slideshowSpeed: 3000,
			controlNav: false,
			directionNav: true,
			itemMargin:10,
			itemWidth:80,  
			move: 2, 
			start: function(slider){
				$('html').removeClass('loading');
			}
		});	
	}
	
/*	if(!_.IE6){
		$('.flexslider-1').flexslider({
			reverse: true, 
			
			animation: "slide",
			slideshow: false, 
			controlNav: false, 
			directionNav: true, 
			animationSpeed: 2000, 
			start: function(slider){
			  $('html').removeClass('loading');
			}
		})
		$('.flexslider-2').flexslider({
			animation: "slide",
			slideshow: false, 
			controlNav: false, 
			directionNav: true,
			direction: "vertical",
			animationSpeed: 2000,  
			controlsContainer: "#portfolio",
			start: function(slider){
			  $('html').removeClass('loading');
			}
		})
	}*/
}

function textSize(){
	function textSmall(){
		$("html").removeClass('textNormal').removeClass('textLarge')
		
		// Set unset cookies
        $.cookie("TS1", 1, { expires: 365, path: '/' });
        $.cookie("TS2", 0, { expires: 365, path: '/' });
        $.cookie("TS3", 0, { expires: 365, path: '/' });
		return false;
	}
	function textMedium(){
		$("html").removeClass('textLarge')
		$("html").addClass('textNormal')
		
		// Set unset cookies
        $.cookie("TS1", 0, { expires: 365, path: '/' });
        $.cookie("TS2", 1, { expires: 365, path: '/' });
        $.cookie("TS3", 0, { expires: 365, path: '/' });
		return false;
	}
	function textLarge(){
		$("html").removeClass('textNormal')
		$("html").addClass('textLarge')
		
		// Set unset cookies
        $.cookie("TS1", 0, { expires: 365, path: '/' });
        $.cookie("TS2", 0, { expires: 365, path: '/' });
        $.cookie("TS3", 1, { expires: 365, path: '/' });
		return false;
	}
	
	$(".normalA").live("click", function (e) {
        e.preventDefault();
		textSmall()
    });
    $(".mediumA").live("click", function (e) {
        e.preventDefault();
		textMedium()
    });
    $(".largeA").live("click", function (e) {
        e.preventDefault();
		textLarge()
    });

    if ($.cookie('TS1') == 1) {
        textSmall()
    } else if ($.cookie('TS2') == 1) {
        textMedium()
    } else if ($.cookie('TS3') == 1) {
        textLarge()
    } else {
        return false;
    }	
}

function menu() {
	$('.btn-navbar').click(function(){
		$('.nav-collapse').toggleClass('collapse');
	});
	//$('.nav-collapse').css('height',$(document).height());
	
	// Sidebar menu
	var clicked = 0
	
	$('.content-menu').find('a').on('click',function(e){
		e.preventDefault();

		clicked = $(this).parent().index()
		
		$('.content-menu').find('li.active').removeClass('active')
		$(this).parent().addClass('active')
		
		$('#content-type').find('.detail-section:visible').removeClass('active')
		$('#content-type').find('.detail-section').eq(clicked).addClass('active')
		
		if(_.touchDevice){
			if(clicked > 0 ){
			$('html,body').stop().scrollTo( '#profile-content', 800, { offset:{ top:-120,left:0 }} );
			} else {
			$('html,body').stop().scrollTo( '.wrap', 800 );
			}
		}
		
	})
	
	/*if (window.location.hash === "about" ) {
		$('.content-menu').find('li.active').removeClass('active')
	} else if (window.location.hash === "more" ) {
		
	}*/
}

function activeTilesPositioning() {
	marginTop = $('.tiles').find('li').height();
	
	$('.tileThumbImage').css({top:marginTop})
	
	return marginTop
}

function activeTiles() {
	
	$('.detail-section').each(function(){
		var tiles = $(this,'.tiles').find('li').length;
		var number = 0 + Math.floor(Math.random() * tiles);
		
		$(this,'.tiles').find('li').eq(number).find('.tileThumbImage').not(':animated').delay(3000).transition({ y: -activeTilesPositioning() },2000,function(){
					
				$(this,'.tiles').find('li').eq(number).find('.tileThumbImage').not(':animated').delay(3000).transition({ y: -activeTilesPositioning() },2000,function(){
					$(this).delay(3000).transition({ y: activeTilesPositioning() },2000)
					activeTiles();	
				});
					
				$(this).delay(3000).transition({ y: activeTilesPositioning() },2000)
					activeTiles();	
				});
	})
}

function fadeActiveTiles() {
	/*$('.detail-section').each(function(){
		var tiles = $(this,'.tiles').find('li').length;
		var number = 0 + Math.floor(Math.random() * tiles);
		
		$(this,'.tiles').find('li.doAnim').eq(number).find('.tileThumbImage').not(':animated').delay(3000).transition({ opacity: 1 },2000,function(){
					
				$(this,'.tiles').find('li').eq(number).find('.tileThumbImage').not(':animated').delay(3000).transition({ opacity: 1 },2000,function(){
					$(this).delay(3000).transition({ opacity: 0 },2000)
					activeTiles();	
				});
					
				$(this).delay(3000).transition({ opacity: 0 },2000)
					fadeActiveTiles();
				});
	})*/
	
	$('.tiles').find('li.doAnim').mouseover(function(){
		$(this).find('.tileThumbImage').not(':animated').transition({ opacity: 1},800);
	})
	
	$('.tiles').find('li.doAnim').mouseout(function(){
		$(this).find('.tileThumbImage').not(':animated').transition({ opacity: 0},800);
	})
	
	/*$('.tiles').find('li.doAnim').hover(function(){
		$(this).find('.tileThumbImage').not(':animated').transition({ opacity: 1},800);
	},function(){
		$(this).find('.tileThumbImage').not(':animated').transition({ opacity: 0},800);
	})*/

}


function mailSignup(){
 $("#signup").validate({
              rules: {
                  name: {
                      required: true,
                      minlength: 2,       
                  },
                  email: {
                      required: true,
                      email: true
                  },
                  robotest1: {
                      required: false,
                      maxlength: 0
                  }
              },
              submitHandler: function(form) {

                       $(form).ajaxSubmit({
                                url:"assets/includes/send.php",
                                type: 'post',
                            success: function(){
					          	$('#signup').fadeOut();
								$('#failure').fadeOut()
								$('#success').fadeIn()
                          }
                        });

              }

          });
}

$(function(){

	mailSignup()
	
	fadeActiveTiles();
    menu();
	//flexSlider();
	textSize();
	$('html').removeClass('no-js');
	$('.nav-collapse').height($('.nav-collapse .nav').height() - $('.nav-collapse .nav > li').height())
	
	if(_.IE6 || _.IE7 || _.IE8){
		$('html').addClass('non-responsive')
		$('.tiles').find('li:nth-child(even)').addClass('nth-child')	
	}

 
})

$(window).load(function(){
});
$(window).resize(function(){
});
$(window).unload(function(){});