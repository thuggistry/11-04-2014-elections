(function() { globe.onDefine('window.jQuery && $("#elections-detailedresults").length', function() {

// @preserve jQuery.floatThead 1.2.8 - http://mkoryak.github.io/floatThead/ - Copyright (c) 2012 - 2014 Misha Koryak
// @license MIT
!function(a){function b(a,b,c){if(8==g){var d=j.width(),e=f.debounce(function(){var a=j.width();d!=a&&(d=a,c())},a);j.on(b,e)}else j.on(b,f.debounce(c,a))}function c(a){window.console&&window.console&&window.console.log&&window.console.log(a)}function d(){var b=a('<div style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;width:100%"></div>');a("body").append(b);var c=b.innerWidth(),d=a("div",b).innerWidth();return b.remove(),c-d}function e(a){if(a.dataTableSettings)for(var b=0;b<a.dataTableSettings.length;b++){var c=a.dataTableSettings[b].nTable;if(a[0]==c)return!0}return!1}a.floatThead=a.floatThead||{},a.floatThead.defaults={cellTag:"th:visible",zIndex:1001,debounceResizeMs:10,useAbsolutePositioning:!0,scrollingTop:0,scrollingBottom:0,scrollContainer:function(){return a([])},getSizingRow:function(a){return a.find("tbody tr:visible:first>*")},floatTableClass:"floatThead-table",floatWrapperClass:"floatThead-wrapper",floatContainerClass:"floatThead-container",copyTableClass:!0,debug:!1};var f=window._,g=function(){for(var a=3,b=document.createElement("b"),c=b.all||[];a=1+a,b.innerHTML="<!--[if gt IE "+a+"]><i><![endif]-->",c[0];);return a>4?a:document.documentMode}(),h=null,i=function(){if(g)return!1;var b=a("<table><colgroup><col></colgroup><tbody><tr><td style='width:10px'></td></tbody></table>");a("body").append(b);var c=b.find("col").width();return b.remove(),0==c},j=a(window),k=0;a.fn.floatThead=function(l){if(l=l||{},!f&&(f=window._||a.floatThead._,!f))throw new Error("jquery.floatThead-slim.js requires underscore. You should use the non-lite version since you do not have underscore.");if(8>g)return this;if(null==h&&(h=i(),h&&(document.createElement("fthtr"),document.createElement("fthtd"),document.createElement("fthfoot"))),f.isString(l)){var m=l,n=this;return this.filter("table").each(function(){var b=a(this).data("floatThead-attached");if(b&&f.isFunction(b[m])){var c=b[m]();"undefined"!=typeof c&&(n=c)}}),n}var o=a.extend({},a.floatThead.defaults||{},l);return a.each(l,function(b){b in a.floatThead.defaults||!o.debug||c("jQuery.floatThead: used ["+b+"] key to init plugin, but that param is not an option for the plugin. Valid options are: "+f.keys(a.floatThead.defaults).join(", "))}),this.filter(":not(."+o.floatTableClass+")").each(function(){function c(a){return a+".fth-"+x+".floatTHead"}function i(){var b=0;z.find("tr:visible").each(function(){b+=a(this).outerHeight(!0)}),Y.outerHeight(b),Z.outerHeight(b)}function l(){var a=y.outerWidth(),b=H.width()||a;if(W.width(b-E.vertical),N){var c=100*a/(b-E.vertical);R.css("width",c+"%")}else R.outerWidth(a)}function m(){B=(f.isFunction(o.scrollingTop)?o.scrollingTop(y):o.scrollingTop)||0,C=(f.isFunction(o.scrollingBottom)?o.scrollingBottom(y):o.scrollingBottom)||0}function n(){var b,c;if(U?b=T.find("col").length:(c=z.find("tr:first>"+o.cellTag),b=0,c.each(function(){b+=parseInt(a(this).attr("colspan")||1,10)})),b!=G){G=b;for(var d=[],e=[],f=[],g=0;b>g;g++)d.push('<th class="floatThead-col"/>'),e.push("<col/>"),f.push("<fthtd style='display:table-cell;height:0;width:auto;'/>");e=e.join(""),d=d.join(""),h&&(f=f.join(""),V.html(f),ab=V.find("fthtd")),Y.html(d),Z=Y.find("th"),U||T.html(e),$=T.find("col"),S.html(e),_=S.find("col")}return b}function p(){if(!D){if(D=!0,I){var a=y.width(),b=P.width();a>b&&y.css("minWidth",a)}y.css(cb),R.css(cb),R.append(z),A.before(X),i()}}function q(){D&&(D=!1,I&&y.width(eb),X.detach(),y.prepend(z),y.css(db),R.css(db))}function r(a){I!=a&&(I=a,W.css({position:I?"absolute":"fixed"}))}function s(a,b,c,d){return h?c:d?o.getSizingRow(a,b,c):b}function t(){var a,b=n();return function(){var c=s(y,$,ab,g);if(c.length==b&&b>0){if(!U)for(a=0;b>a;a++)$.eq(a).css("width","");for(q(),a=0;b>a;a++){var d=c.get(a),e=d.offsetWidth;_.eq(a).width(e),$.eq(a).width(e)}p()}else R.append(z),y.css(db),R.css(db),i()}}function u(){var a,b=H.scrollTop(),c=0,d=K?J.outerHeight(!0):0,e=L?d:-d,f=W.height(),g=y.offset();if(N){var i=H.offset();c=g.top-i.top+b,K&&L&&(c+=d)}else a=g.top-B-f+C+E.horizontal;var k=j.scrollTop(),l=j.scrollLeft(),m=H.scrollLeft();return b=H.scrollTop(),function(i){if("windowScroll"==i?(k=j.scrollTop(),l=j.scrollLeft()):"containerScroll"==i?(b=H.scrollTop(),m=H.scrollLeft()):"init"!=i&&(k=j.scrollTop(),l=j.scrollLeft(),b=H.scrollTop(),m=H.scrollLeft()),!h||!(0>k||0>l)){if(Q)r("windowScrollDone"==i?!0:!1);else if("windowScrollDone"==i)return null;g=y.offset(),K&&L&&(g.top+=d);var n,o,s=y.outerHeight();if(N&&I){if(c>=b){var t=c-b;t=t>0?t:0,n=t}else n=O?0:b;o=0}else!N&&I?(k>a+s+e?n=s-f+e:g.top>k+B?(n=0,q()):(n=B+k-g.top+c+(L?d:0),p()),o=0):N&&!I?(c>b||b-c>s?(n=g.top-k,q()):(n=g.top+b-k-c,p()),o=g.left+m-l):N||I||(k>a+s+e?n=s+B-k+a+e:g.top>k+B?(n=g.top-k,p()):n=B,o=g.left-l);return{top:n,left:o}}}}function v(){var a=null,b=null,c=null;return function(d,e,f){null==d||a==d.top&&b==d.left||(W.css({top:d.top,left:d.left}),a=d.top,b=d.left),e&&l(),f&&i();var g=H.scrollLeft();c!=g&&(W.scrollLeft(g),c=g)}}function w(){if(H.length){var a=H.width(),b=H.height(),c=y.height(),d=y.width(),e=d>a?F:0,f=c>b?F:0;E.horizontal=d>a-f?F:0,E.vertical=c>b-e?F:0}}var x=k,y=a(this);if(y.data("floatThead-attached"))return!0;if(!y.is("table"))throw new Error('jQuery.floatThead must be run on a table element. ex: $("table").floatThead();');var z=y.find("thead:first"),A=y.find("tbody:first");if(0==z.length)throw new Error("jQuery.floatThead must be run on a table that contains a <thead> element");var B,C,D=!1,E={vertical:0,horizontal:0},F=d(),G=0,H=o.scrollContainer(y)||a([]),I=o.useAbsolutePositioning;null==I&&(I=o.scrollContainer(y).length);var J=y.find("caption"),K=1==J.length;if(K)var L="top"===(J.css("caption-side")||J.attr("align")||"top");var M=a('<fthfoot style="display:table-footer-group;"/>'),N=H.length>0,O=!1,P=a([]),Q=9>=g&&!N&&I,R=a("<table/>"),S=a("<colgroup/>"),T=y.find("colgroup:first"),U=!0;0==T.length&&(T=a("<colgroup/>"),U=!1);var V=a('<fthrow style="display:table-row;height:0;"/>'),W=a('<div style="overflow: hidden;"></div>'),X=a("<thead/>"),Y=a('<tr class="size-row"/>'),Z=a([]),$=a([]),_=a([]),ab=a([]);if(X.append(Y),y.prepend(T),h&&(M.append(V),y.append(M)),R.append(S),W.append(R),o.copyTableClass&&R.attr("class",y.attr("class")),R.attr({cellpadding:y.attr("cellpadding"),cellspacing:y.attr("cellspacing"),border:y.attr("border")}),R.addClass(o.floatTableClass).css("margin",0),I){var bb=function(a,b){var c=a.css("position"),d="relative"==c||"absolute"==c;if(!d||b){var e={paddingLeft:a.css("paddingLeft"),paddingRight:a.css("paddingRight")};W.css(e),a=a.wrap("<div class='"+o.floatWrapperClass+"' style='position: relative; clear:both;'></div>").parent(),O=!0}return a};N?(P=bb(H,!0),P.append(W)):(P=bb(y),y.after(W))}else y.after(W);W.css({position:I?"absolute":"fixed",marginTop:0,top:I?0:"auto",zIndex:o.zIndex}),W.addClass(o.floatContainerClass),m();var cb={"table-layout":"fixed"},db={"table-layout":y.css("tableLayout")||"auto"},eb=y[0].style.width||"";w();var fb,gb=function(){(fb=t())()};gb();var hb=u(),ib=v();ib(hb("init"),!0);var jb=f.debounce(function(){ib(hb("windowScrollDone"),!1)},300),kb=function(){ib(hb("windowScroll"),!1),jb()},lb=function(){ib(hb("containerScroll"),!1)},mb=function(){m(),w(),gb(),hb=u(),(ib=v())(hb("resize"),!0,!0)},nb=f.debounce(function(){w(),m(),gb(),hb=u(),ib(hb("reflow"),!0)},1);N?I?H.on(c("scroll"),lb):(H.on(c("scroll"),lb),j.on(c("scroll"),kb)):j.on(c("scroll"),kb),j.on(c("load"),nb),b(o.debounceResizeMs,c("resize"),mb),y.on("reflow",nb),e(y)&&y.on("filter",nb).on("sort",nb).on("page",nb),y.data("floatThead-attached",{destroy:function(){var a=".fth-"+x;q(),y.css(db),T.remove(),h&&M.remove(),X.parent().length&&X.replaceWith(z),y.off("reflow"),H.off(a),O&&H.unwrap(),W.remove(),y.data("floatThead-attached",!1),j.off(a)},reflow:function(){nb()},setHeaderHeight:function(){i()},getFloatContainer:function(){return W},getRowGroups:function(){return D?W.find("thead").add(y.find("tbody,tfoot")):y.find("thead,tbody,tfoot")}}),k++}),this}}(jQuery),function(a){a.floatThead=a.floatThead||{},a.floatThead._=window._||function(){var b={},c=Object.prototype.hasOwnProperty,d=["Arguments","Function","String","Number","Date","RegExp"];return b.has=function(a,b){return c.call(a,b)},b.keys=function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[];for(var d in a)b.has(a,d)&&c.push(d);return c},a.each(d,function(){var a=this;b["is"+a]=function(b){return Object.prototype.toString.call(b)=="[object "+a+"]"}}),b.debounce=function(a,b,c){var d,e,f,g,h;return function(){f=this,e=arguments,g=new Date;var i=function(){var j=new Date-g;b>j?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e)))},j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e)),h}},b}()}(jQuery);
	require('./main.jsx');

}); }());