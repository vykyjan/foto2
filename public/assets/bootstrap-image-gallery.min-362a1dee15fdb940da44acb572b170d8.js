(function(a){"use strict",typeof define=="function"&&define.amd?define(["jquery","./load-image.js","bootstrap"],a):a(window.jQuery,window.loadImage)})(function(a,b){"use strict",a.extend(a.fn.modal.defaults,{delegate:document,selector:null,index:0,href:null,preloadRange:2,offsetWidth:100,offsetHeight:200,canvas:!1,slideshow:0});var c=a.fn.modal.Constructor.prototype.show,d=a.fn.modal.Constructor.prototype.hide;a.extend(a.fn.modal.Constructor.prototype,{initLinks:function(){var b=this,c=this.options,d=c.selector||"a[data-target="+c.target+"]",e=0;a(c.delegate).find(d).each(function(d,f){var g=f.href||a(f).data("href");b.urls[b.urls.length-1]!==g&&(b.urls.push(g),b.titles.push(f.title),g===c.href&&(c.index=e),e+=1)}),this.urls[c.index]||(c.index=0)},startSlideShow:function(){var a=this;this.options.slideshow&&(this._slideShow=window.setTimeout(function(){a.next()},this.options.slideshow))},stopSlideShow:function(){window.clearTimeout(this._slideShow)},toggleSlideShow:function(){var a=this.$element.find(".modal-slideshow");this.options.slideshow?(this.options.slideshow=0,this.stopSlideShow()):(this.options.slideshow=a.data("slideshow")||5e3,this.startSlideShow()),a.find("i").toggleClass("icon-play icon-pause")},preloadImages:function(){var b=this.options,c=b.index+b.preloadRange+1,d,e;for(e=b.index-b.preloadRange;e<c;e+=1)d=this.urls[e],d&&e!==b.index&&a("<img>").prop("src",d)},loadImage:function(){var a=this,c=this.$element,d=this.options.index,e;this.abortLoad(),this.stopSlideShow(),this._loadingTimeout=window.setTimeout(function(){c.addClass("modal-loading")},100),e=c.find(".modal-image").children().removeClass("in"),window.setTimeout(function(){e.remove()},3e3),c.find(".modal-title").text(this.titles[d]),c.find(".modal-download").prop("href",this.urls[d]),this.loadingImage=b(this.urls[d],function(b){window.clearTimeout(a._loadingTimeout),c.removeClass("modal-loading"),a.showImage(b),a.startSlideShow()},a.loadImageOptions),this.preloadImages()},showImage:function(b){var c=this.$element,d=a.support.transition&&c.hasClass("fade"),e=d?c.animate:c.css,f=c.find(".modal-image"),g,h;f.css({width:b.width,height:b.height}),c.find(".modal-title").css({width:Math.max(b.width,380)}),a(window).width()>480&&(d&&(g=c.clone().hide().appendTo(document.body)),e.call(c.stop(),{"margin-top":-((g||c).outerHeight()/2),"margin-left":-((g||c).outerWidth()/2)}),g&&g.remove()),f.append(b),h=b.offsetWidth,a(b).addClass("in")},abortLoad:function(){this.loadingImage&&(this.loadingImage.onload=this.loadingImage.onerror=null),window.clearTimeout(this._loadingTimeout)},prev:function(){var a=this.options;a.index-=1,a.index<0&&(a.index=this.urls.length-1),this.loadImage()},next:function(){var a=this.options;a.index+=1,a.index>this.urls.length-1&&(a.index=0),this.loadImage()},keyHandler:function(a){switch(a.which){case 37:case 38:a.preventDefault(),this.prev();break;case 39:case 40:a.preventDefault(),this.next()}},wheelHandler:function(a){a.preventDefault(),a=a.originalEvent,this._wheelCounter=this._wheelCounter||0,this._wheelCounter+=a.wheelDelta||a.detail||0;if(a.wheelDelta&&this._wheelCounter>=120||!a.wheelDelta&&this._wheelCounter<0)this.prev(),this._wheelCounter=0;else if(a.wheelDelta&&this._wheelCounter<=-120||!a.wheelDelta&&this._wheelCounter>0)this.next(),this._wheelCounter=0},initGalleryEvents:function(){var b=this,c=this.$element;c.find(".modal-image").on("click.modal-gallery",function(a){a.altKey?b.prev(a):b.next(a)}),c.find(".modal-prev").on("click.modal-gallery",function(a){b.prev(a)}),c.find(".modal-next").on("click.modal-gallery",function(a){b.next(a)}),c.find(".modal-slideshow").on("click.modal-gallery",function(a){b.toggleSlideShow(a)}),a(document).on("keydown.modal-gallery",function(a){b.keyHandler(a)}).on("mousewheel.modal-gallery, DOMMouseScroll.modal-gallery",function(a){b.wheelHandler(a)})},destroyGalleryEvents:function(){var b=this.$element;this.abortLoad(),this.stopSlideShow(),b.find(".modal-image, .modal-prev, .modal-next, .modal-slideshow").off("click.modal-gallery"),a(document).off("keydown.modal-gallery").off("mousewheel.modal-gallery, DOMMouseScroll.modal-gallery")},show:function(){if(!this.isShown&&this.$element.hasClass("modal-gallery")){var b=this.$element,d=this.options,e=a(window).width(),f=a(window).height();this.urls=[],this.titles=[],b.hasClass("modal-fullscreen")?this.loadImageOptions={minWidth:e,minHeight:f,maxWidth:e,maxHeight:f,canvas:d.canvas}:this.loadImageOptions={maxWidth:e-d.offsetWidth,maxHeight:f-d.offsetHeight,canvas:d.canvas},e>480&&b.css({"margin-top":-(b.outerHeight()/2),"margin-left":-(b.outerWidth()/2)}),this.initGalleryEvents(),this.initLinks(),this.urls.length&&this.loadImage()}c.apply(this,arguments)},hide:function(){this.isShown&&this.$element.hasClass("modal-gallery")&&(this.options.delegate=document,this.options.href=null,this.destroyGalleryEvents()),d.apply(this,arguments)}}),a(function(){a(document.body).on("click.modal-gallery.data-api",'[data-toggle="modal-gallery"]',function(b){var c=a(this),d=c.data(),e=a(d.target),f=e.data("modal"),g;f||(d=a.extend(e.data(),d)),d.selector||(d.selector="a[rel=gallery]"),g=a(b.target).closest(d.selector),g.length&&e.length&&(b.preventDefault(),d.href=g.prop("href")||g.data("href"),d.delegate=g[0]!==this?this:document,f&&a.extend(f.options,d),e.modal(d))})})});