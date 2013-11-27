// JavaScript Document

function checkboxMax1(obj, name) {
	if (obj.checked != true) {
		obj.checked = false;
	} else {
		var cbs = document.getElementsByName(name);
		for (var i = 0; i < cbs.length; i++) {
			cbs[i].checked = false;
		}
		obj.checked = true;
	}
}