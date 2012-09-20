/*
	Slimbox v2.04 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2010 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(a){function C(){var c=b.scrollLeft(),d=b.width();a([t,y]).css("left",c+d/2),i&&a(s).css({left:c,top:b.scrollTop(),width:d,height:b.height()})}function D(c){c?a("object").add(m?"select":"embed").each(function(a,b){n[a]=[b,b.style.visibility],b.style.visibility="hidden"}):(a.each(n,function(a,b){b[0].style.visibility=b[1]}),n=[]);var d=c?"bind":"unbind";b[d]("scroll resize",C),a(document)[d]("keydown",E)}function E(b){var d=b.keyCode,e=a.inArray;return e(d,c.closeKeys)>=0?L():e(d,c.nextKeys)>=0?G():e(d,c.previousKeys)>=0?F():!1}function F(){return H(g)}function G(){return H(h)}function H(a){return a>=0&&(e=a,f=d[e][0],g=(e||(c.loop?d.length:0))-1,h=(e+1)%d.length||(c.loop?0:-1),K(),t.className="lbLoading",p=new Image,p.onload=I,p.src=f),!1}function I(){t.className="",a(u).css({backgroundImage:"url("+f+")",visibility:"hidden",display:""}),a(v).width(p.width),a([v,w,x]).height(p.height),a(A).html(d[e][1]||""),a(B).html((d.length>1&&c.counterText||"").replace(/{x}/,e+1).replace(/{y}/,d.length)),g>=0&&(q.src=d[g][0]),h>=0&&(r.src=d[h][0]),k=u.offsetWidth,l=u.offsetHeight;var b=Math.max(0,j-l/2);t.offsetHeight!=l&&a(t).animate({height:l,top:b},c.resizeDuration,c.resizeEasing),t.offsetWidth!=k&&a(t).animate({width:k,marginLeft:-k/2},c.resizeDuration,c.resizeEasing),a(t).queue(function(){a(y).css({width:k,top:b+l,marginLeft:-k/2,visibility:"hidden",display:""}),a(u).css({display:"none",visibility:"",opacity:""}).fadeIn(c.imageFadeDuration,J)})}function J(){g>=0&&a(w).show(),h>=0&&a(x).show(),a(z).css("marginTop",-z.offsetHeight).animate({marginTop:0},c.captionAnimationDuration),y.style.visibility=""}function K(){p.onload=null,p.src=q.src=r.src=f,a([t,u,z]).stop(!0),a([w,x,u,y]).hide()}function L(){return e>=0&&(K(),e=g=h=-1,a(t).hide(),a(s).stop().fadeOut(c.overlayFadeDuration,D)),!1}var b=a(window),c,d,e=-1,f,g,h,i,j,k,l,m=!window.XMLHttpRequest,n=[],o=document.documentElement,p={},q=new Image,r=new Image,s,t,u,v,w,x,y,z,A,B;a(function(){a("body").append(a([s=a('<div id="lbOverlay" />')[0],t=a('<div id="lbCenter" />')[0],y=a('<div id="lbBottomContainer" />')[0]]).css("display","none")),u=a('<div id="lbImage" />').appendTo(t).append(v=a('<div style="position: relative;" />').append([w=a('<a id="lbPrevLink" href="#" />').click(F)[0],x=a('<a id="lbNextLink" href="#" />').click(G)[0]])[0])[0],z=a('<div id="lbBottom" />').appendTo(y).append([a('<a id="lbCloseLink" href="#" />').add(s).click(L)[0],A=a('<div id="lbCaption" />')[0],B=a('<div id="lbNumber" />')[0],a('<div style="clear: both;" />')[0]])[0]}),a.slimbox=function(e,f,g){return c=a.extend({loop:!1,overlayOpacity:.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},g),typeof e=="string"&&(e=[[e,f]],f=0),j=b.scrollTop()+b.height()/2,k=c.initialWidth,l=c.initialHeight,a(t).css({top:Math.max(0,j-l/2),width:k,height:l,marginLeft:-k/2}).show(),i=m||s.currentStyle&&s.currentStyle.position!="fixed",i&&(s.style.position="absolute"),a(s).css("opacity",c.overlayOpacity).fadeIn(c.overlayFadeDuration),C(),D(1),d=e,c.loop=c.loop&&d.length>1,H(f)},a.fn.slimbox=function(b,c,d){c=c||function(a){return[a.href,a.title]},d=d||function(){return!0};var e=this;return e.unbind("click").click(function(){var f=this,g=0,h,i=0,j;h=a.grep(e,function(a,b){return d.call(f,a,b)});for(j=h.length;i<j;++i)h[i]==f&&(g=i),h[i]=c(h[i],i);return a.slimbox(h,g,b)})}})(jQuery),/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)||jQuery(function(a){a("a[rel^='lightbox']").slimbox({},null,function(a){return this==a||this.rel.length>8&&this.rel==a.rel})});