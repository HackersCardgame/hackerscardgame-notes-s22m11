
function isEmpty(value){
	if(typeof value == 'undefined' || value == null || value == '' || value == '0' || value == 0){
		return true;
	}
	else if(value instanceof Array && value.length == 0){
		return true;
	}
	else if(value instanceof Object){
		var empty = true;
		for(var index in value){
			empty = false;
		}
		if(empty){
			return true;
		}
	}
	return false;
}
//-----------------------------------------------------
function manipulateNodeIcon(){
	var nodes = document.getElementsByClassName('wm-custom-tree-icon');
	var manipulated = 0;
	for(var i = 0; i < nodes.length; i++){
		var node = nodes[i];
		var res = manipulateIconClasses(node.getAttribute('class'));
		node.setAttribute('class', res.newClass);
		var el = document.createElement('img');
		el.setAttribute('src', res.imgSrc);
		el.setAttribute('width', '22');
		el.setAttribute('height', '22');
		el.setAttribute('border', '0');
		el.style.borderRadius = '100px';
		node.appendChild(el);
		node.style.backgroundColor = '#FFFFFF';
		manipulated++;
	}
	(manipulated < nodes.length)? manipulateNodeIcon() : null;
}
//-----------------------------------------------------
function manipulateIconClasses(cls){
	var regexp = new RegExp('^wm-img-');
	var classes = cls.split(" ");
	var response = {
		imgSrc: null,
		newClass: ''
	};
	for(var i = 0; i < classes.length; i++){
		var clss = classes[i];
		if(regexp.test(clss)){
			response.imgSrc = wm_options.plug_images_url + clss.substr(7).split('_+_').join('.');;
		}
		
		if(!regexp.test(clss) && clss != 'wm-custom-tree-icon'){
			response.newClass += ' ' + clss;
		}
	}
	return response;
}
//-----------------------------------------------------
function wm_toLink(anchor){
	//var href = jQuery(anchor).data('href');
	//var target = jQuery(anchor).data('target');
	var href = anchor.href;
	var target = anchor.target;
	if(target == '_blank'){
		window.open(href);
	} else{
		window.location.href = href;
	}
}
//-----------------------------------------------------
function drawHorizontalMap(mp_id, containerId){
	jQuery.ajax({
		type: 'POST',
		url: wm_options.admin_url + 'admin-ajax.php',
		data: {
			action: 'wm_draw_horizontal_map',
			mp_id: mp_id
		},
		success: function(data){
			if(data){
				jQuery('#' + containerId).html(data);
			}
		}
	});
}
/*//-----------------------------------------------------
jQuery(document).ready(function () {
	var ele_this = jQuery('.wm-tree-container div ul li .jstree-icon.jstree-ocl');
	console.log(ele_this);
});

jQuery(document).on('click','.wm-tree-container:first div ul li i:first',function(e){
	console.log(1111);
	var data_height = jQuery(this).parents('.wm-tree-container').attr('data-height');

	//jQuery(this).parents('.wm-tree-container').height(data_height);

});

jQuery(document).on('click','.wm-tree-container div ul li.jstree-closed i:first',function(e){
	console.log(2222);
	//jQuery('.jstree-open .jstree-icon.jstree-ocl').parent('li').parent('ul').parent('div').parent('.wm-tree-container').height('auto');
	//jQuery(this).parent('ul').parent('div').parent('.wm-tree-container').height('auto');

});*/
// -----------------------------------------------------

