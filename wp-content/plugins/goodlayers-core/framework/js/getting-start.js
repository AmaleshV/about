!function(e){"use strict";var o=function(){this.form=e("#gdlr-core-demo-import-form"),this.import_button=this.form.find("#gdlr-core-demo-import-submit"),this.demo_selector=this.form.find("#gdlr-core-demo-import-option"),this.preview_button=this.form.find("#gdlr-core-view-demo-button"),this.success_report=this.form.find("#gdlr-core-demo-import-success"),this.now_loading="",this.init()};o.prototype={init:function(){var o=this;o.sync_section_height(),e(window).on("gdlr-core-tab-change",function(){o.sync_section_height()}),o.demo_selector.change(function(){var t=e(this).find(":selected").attr("data-url");o.preview_button.attr("href",t)}),o.import_button.click(function(){return e(this).hasClass("gdlr-core-active")?!1:void gdlr_core_confirm_box({success:function(){o.import_process(o)}})});var t=o.form.find("#gdlr-core-image-condition-wrap");o.form.find("#gdlr-core-image-condition").click(function(){return t.fadeIn(200),!1}),t.find(".gdlr-core-condition-close").click(function(){t.fadeOut(200)})},import_process:function(o){o.import_button.addClass("gdlr-core-active");var t={action:"gdlr_core_demo_import",security:gdlr_core_ajax_message.nonce};o.form.find("[data-name]").each(function(){e(this).is("select")?t[e(this).attr("data-name")]=e(this).val():e(this).is('input[type="checkbox"]:checked')&&(t[e(this).attr("data-name")]=1)}),e.ajax({type:"POST",url:gdlr_core_ajax_message.ajaxurl,data:t,dataType:"json",beforeSend:function(t,s){o.success_report.slideUp(200),o.init_now_loading(),e("body").append(o.now_loading),o.now_loading.fadeIn()},error:function(t,s,r){o.import_button.removeClass("gdlr-core-active"),o.now_loading.fadeOut(200,function(){e(this).remove()}),setTimeout(function(){gdlr_core_alert_box({status:"failed",head:gdlr_core_ajax_message.error_head,message:gdlr_core_ajax_message.error_message})},400),console.log(t,s,r)},success:function(s){"process"==s.status?(s.head&&o.set_now_loading(s.head+" (0%)"),o.bulk_image_import({data_sent:t,process:s.process,success_message:s.message,loading_head:s.head})):(o.import_button.removeClass("gdlr-core-active"),o.now_loading.fadeOut(200,function(){e(this).remove()}),"success"==s.status?s.message&&o.success_report.html(s.message).slideDown(200):"failed"==s.status&&setTimeout(function(){gdlr_core_alert_box({status:"failed",head:s.head,message:s.message})},400)),s.console&&console.log(s.console)}})},bulk_image_import:function(o){var t=this,s=o.data_sent;s.action="gdlr_core_demo_images_import",s.process=o.process;var r=0,i=0,n=0,a=setInterval(function(){for(;20>r&&i<o.process;)s.current_process=i,e.ajax({type:"POST",url:gdlr_core_ajax_message.ajaxurl,data:s,dataType:"json",error:function(s,i,a){n++,r--,n==o.process?(t.import_button.removeClass("gdlr-core-active"),t.now_loading.fadeOut(200,function(){e(this).remove()}),t.success_report.html(o.success_message).slideDown(200)):t.set_now_loading(o.loading_head+" ("+parseInt(100*n/o.process)+"%)"),console.log(s,i,a)},success:function(s){n++,r--,n==o.process?(t.import_button.removeClass("gdlr-core-active"),t.now_loading.fadeOut(200,function(){e(this).remove()}),t.success_report.html(o.success_message).slideDown(200)):t.set_now_loading(o.loading_head+" ("+parseInt(100*n/o.process)+"%)"),s.console&&console.log(s.console)}}),console.log("request : "+i),r++,i++;i>=o.process&&clearInterval(a)},1e3)},init_now_loading:function(){this.now_loading=e('<div class="gdlr-core-import-now-loading">					<div class="gdlr-core-import-now-loading-image" ></div>					<div class="gdlr-core-import-now-loading-head" ></div>					<div class="gdlr-core-import-now-loading-content" ></div>				</div>'),this.set_now_loading(gdlr_core_ajax_message.importing_head,gdlr_core_ajax_message.importing_content)},set_now_loading:function(e,o){e&&this.now_loading.find(".gdlr-core-import-now-loading-head").html(e),o&&this.now_loading.find(".gdlr-core-import-now-loading-content").html(o)},sync_section_height:function(){var o=0;this.form.children(".gdlr-core-demo-import-section-wrap").css("height","auto").each(function(){e(this).height()>o&&(o=e(this).height())}),this.form.children(".gdlr-core-demo-import-section-wrap").height(o)}},e(document).ready(function(){e("#gdlr-core-getting-start-nav").each(function(){var o=e(this),t=e(this).siblings("#gdlr-core-getting-start-content");o.children("a").click(function(){if(e(this).hasClass("gdlr-core-active"))return!1;if(e(this).attr("data-page")){e(this).addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active");var o=t.children('[data-page="'+e(this).attr("data-page")+'"]');return o.addClass("gdlr-core-active").css("display","none").fadeIn(200).siblings().removeClass("gdlr-core-active").hide(),e(window).trigger("gdlr-core-tab-change"),!1}})}),new o})}(jQuery);