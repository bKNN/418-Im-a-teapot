!function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},b.fn.typeahead.defaults,d);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=b(this.options.menu);this.shown=false;this.listen()};c.prototype={constructor:c,select:function(){var d=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(d)).change();return this.hide()},updater:function(d){return d},show:function(){var d=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:d.top+d.height,left:d.left}).show();this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(e){var d;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}d=b.isFunction(this.source)?this.source(this.query,b.proxy(this.process,this)):this.source;return d?this.process(d):this},process:function(d){var e=this;d=b.grep(d,function(f){return e.matcher(f)});d=this.sorter(d);if(!d.length){return this.shown?this.hide():this}return this.render(d.slice(0,this.options.items)).show()},matcher:function(d){return ~d.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(f){var g=[],e=[],d=[],h;while(h=f.shift()){if(!h.toLowerCase().indexOf(this.query.toLowerCase())){g.push(h)}else{if(~h.indexOf(this.query)){e.push(h)}else{d.push(h)}}}return g.concat(e,d)},highlighter:function(d){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return d.replace(new RegExp("("+e+")","ig"),function(f,g){return"<strong>"+g+"</strong>"})},render:function(d){var e=this;d=b(d).map(function(f,g){f=b(e.options.item).attr("data-value",g);f.find("a").html(e.highlighter(g));return f[0]});d.first().addClass("active");this.$menu.html(d);return this},next:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.next();if(!d.length){d=b(this.$menu.find("li")[0])}d.addClass("active")},prev:function(e){var f=this.$menu.find(".active").removeClass("active"),d=f.prev();if(!d.length){d=this.$menu.find("li").last()}d.addClass("active")},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this))},eventSupported:function(d){var e=d in this.$element;if(!e){this.$element.setAttribute(d,"return;");e=typeof this.$element[d]==="function"}return e},move:function(d){if(!this.shown){return}switch(d.keyCode){case 9:case 13:case 27:d.preventDefault();break;case 38:d.preventDefault();this.prev();break;case 40:d.preventDefault();this.next();break}d.stopPropagation()},keydown:function(d){this.suppressKeyPressRepeat=~b.inArray(d.keyCode,[40,38,9,13,27]);this.move(d)},keypress:function(d){if(this.suppressKeyPressRepeat){return}this.move(d)},keyup:function(d){switch(d.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.lookup()}d.stopPropagation();d.preventDefault()},focus:function(d){this.focused=true},blur:function(d){this.focused=false;if(!this.mousedover&&this.shown){this.hide()}},click:function(d){d.stopPropagation();d.preventDefault();this.select();this.$element.focus()},mouseenter:function(d){this.mousedover=true;this.$menu.find(".active").removeClass("active");b(d.currentTarget).addClass("active")},mouseleave:function(d){this.mousedover=false;if(!this.focused&&this.shown){this.hide()}}};var a=b.fn.typeahead;b.fn.typeahead=function(d){return this.each(function(){var g=b(this),f=g.data("typeahead"),e=typeof d=="object"&&d;if(!f){g.data("typeahead",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};b.fn.typeahead.Constructor=c;b.fn.typeahead.noConflict=function(){b.fn.typeahead=a;return this};b(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(f){var d=b(this);if(d.data("typeahead")){return}d.typeahead(d.data())})}(window.jQuery);
