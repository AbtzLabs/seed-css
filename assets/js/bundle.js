!function(t){var s,e,o,a,i,h=20;t(document).on("ready",function(){s=t("#samples-nav"),e=s.offset().top,o=t("#license").offset().top-h,a=t(this).scrollTop()+h,i=s.width(),s.find("a.spy").each(function(){var s=t(t(this).attr("href"));t(this).data("offset",s.offset().top+s.height())}).on("click",function(s){t("html,body").animate({scrollTop:t(t(this).attr("href")).offset().top})}),a>=e&&0===t("#samples-nav.stacked").length&&(a+s.height()>=o&&(a-=a+s.height()-o),s.addClass("stacked").css({width:i,top:Math.fround(a-e)}))}).on("scroll resize",function(){a=t(this).scrollTop()+h,a>=e&&a+s.height()<=o?s.addClass("stacked").css({width:i,top:Math.fround(a-e)}):a<e&&s.removeClass("stacked").css({}),t(".spy").removeClass("active").each(function(){if(a<t(this).data("offset"))return t(this).addClass("active"),!1}),t.get("https://img.shields.io/github/release/rogeriotaques/seed-css.json",function(s){t("#release").html(s.value)})})}(jQuery);