// JavaScript Document

function checkboxMax1(obj, name) {
    var cbs = document.getElementsByName(name);
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}