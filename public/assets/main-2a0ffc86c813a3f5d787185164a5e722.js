/*
 * jQuery File Upload Plugin JS Example 6.5.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
/*jslint nomen: true, unparam: true, regexp: true */
/*global $, window, document */
$(function(){function a(a){$("#picture_crop_x").val(a.x),$("#picture_crop_y").val(a.y),$("#picture_crop_w").val(a.w),$("#picture_crop_h").val(a.h)}$("#cropbox").Jcrop({boxWidth:770,boxHeight:433,onSelect:a,onChange:a}),"use strict",$("#fileupload").fileupload({autoUpload:!0,uploadTemplate:function(a){var b=$();return $.each(a.files,function(a,c){console.log(c);var d=$('<li class="span3"><div class="thumbnail"><div class="preview" style="text-align: center;"></div><div class="progress progress-success progress-striped active"><div class="bar" style="width:0%;"></div></div></div>');b=b.add(d)}),b},completed:function(a,b){console.log(b.result[0].url),$('a[href^="'+b.result[0].url+'"]').slimbox()},downloadTemplate:function(a){var b=$();return $.each(a.files,function(a,c){var d=$('<li class="span3" id="picture_'+c.picture_id+'">'+(c.error?'<div class="name"></div><div class="size"></div><div class="error" ></div>':'<div class="thumbnail"><a href="'+c.url+'" rel="lightbox-pictures" class="picture_'+c.id+'" title="<%= pic.description %>">'+'<img src="" alt="">')+"</a>"+'<div class="caption">'+'<p style="text-align: center;">'+'<a href="" class="btn btn-mini btn-show" style="margin-right: 4px;">'+'<i class="icon-edit "></i>'+"Edit"+"</a>"+'<a class="btn btn-mini btn-delete" confirm="Вы уверены?" data-remote=true data-method="delete" href="" >'+'<i class="icon-trash"></i>'+"Delete"+"</a>"+"</p>"+"</div>"+"</div>");c.error?(d.find(".name").text(c.name),d.find(".error").text(locale.fileupload.errors[c.error]||c.error)):(c.thumbnail_url&&d.find("img").prop("src",c.thumbnail_url),d.find(".btn-delete").attr("href","/galleries/"+$("#galleryID").val()+"/pictures/"+c.picture_id),d.find(".btn-show").attr("href","/galleries/"+$("#galleryID").val()+"/pictures/"+c.picture_id+"/edit")),b=b.add(d)}),b}})});