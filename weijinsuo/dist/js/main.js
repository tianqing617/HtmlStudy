$(function(){function n(n,t){clearTimeout(i),i=setTimeout(n,t)}function t(){var n=$(window).width(),t=n<768;$("#main_banner>.carousel-inner>.item").each(function(n,i){var e=$(i);if(t){var a='<img src="'+e.data("image-xs")+'" alt="banner"></img>';e.empty().html(a)}else e.empty(),e.css("backgroundImage","url("+e.data("image-lg")+")")})}var i=null;$(window).on("resize",function(){n(t,100)}).trigger("resize"),$('[data-toggle="tooltip"]').tooltip();var e=30,a=$("#nav_product");a.children().each(function(n,t){e+=t.clientWidth}).parent(),e>$(window).width()&&a.css("width",e).parent().css("overflow-x","scroll"),$("#nav_titles>li").on("click",function(){$("#nav_titles").children().removeClass("active"),$(this).addClass("active"),$("#news_title").text($(this).data("title"))}),function(){var n=0,t=0;$("#main_banner").on("touchstart",function(t){n=t.originalEvent.touches[0].clientX}),$("#main_banner").on("touchmove",function(n){t=n.originalEvent.touches[0].clientX}),$("#main_banner").on("touchend",function(i){console.log(n+"---"+t);var e=Math.abs(n-t),a=50;e>a&&$(this).carousel(n>t?"next":"prev")})}()});