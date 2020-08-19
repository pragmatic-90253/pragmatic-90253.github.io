function showInitInput(objHide, idShow) {
  var pageW = document.documentElement.clientWidth;
  if (pageW < 600) {
    var warning = document.createElement('div');
    warning.setAttribute('class', 'init-err');
    objHide.parentNode.appendChild(warning);
  }
  else { 
    objHide.style.display = 'none';
    document.getElementById(idShow).style.display = 'block';
  }
}

function initList() {
  var obj = document.getElementById('new-list');
  if (obj.value.length == 0) {
    return false;
  }
  obj.form.submit();
}

function msg(msgId, msg) {
  document.getElementById(msgId).innerHTML = msg;
  return false;
}

function newList(trigger) {
  var obj = document.getElementById('new-list');
  if (obj.style.display == 'none') {
    obj.style.display = 'inline-block';
    trigger.innerHTML = 'Create';
    return false;
  }
  if (obj.value.length == 0) {
    return false;
  }
  var newName = obj.value;
  var x = document.getElementById('list-names').childNodes;
  for (var i = 0; i < x.length; i++) {
    if (x[i].innerHTML == newName) {
      document.getElementById('listname-err').innerHTML = "List '" + newName + "' already exists!";
      obj.value = '';
      return false;
    }
  }
  obj.form.submit();
}

function msgListFull(msg) {
  document.getElementById('list-err').innerHTML = msg;
  return false;
}

function addListItem(idInput, arr) {
  var obj = document.getElementById(idInput);
  if (obj.value.length == 0) {
    return false;
  }
  if (arr.indexOf(obj.value) == -1) {
    document.getElementById('list-err').innerHTML = "'" + obj.value + "' not found!";
    obj.value = '';
    return false;
  }
  obj.form.submit();
}

function xListItem(obj) {
  var arr = document.getElementsByTagName('edit-x');
  var cnt = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].innerHTML == 'X') { cnt++; }
  }
  if (obj.innerHTML == '') {
    obj.innerHTML = 'X';
    cnt++;
    if (cnt == arr.length) {
      document.getElementById('edit-xall').innerHTML = 'X';
    }
  }
  else {
    obj.innerHTML = '';
    if (cnt == arr.length) { document.getElementById('edit-xall').innerHTML = ''; }
  }
}

function xListItemAll(obj) {
  var arr = document.getElementsByTagName('edit-x');
  if (arr.length > 0) {
    if (obj.innerHTML == 'X') {
      for (var i = 0; i < arr.length; i++) { arr[i].innerHTML = ''; }
      obj.innerHTML = '';
    }
    else {
      for (var i = 0; i < arr.length; i++) { arr[i].innerHTML = 'X'; }
      obj.innerHTML = 'X';
    }
  }
}

function delListItems() {
  var objHidden = document.getElementById('listitem-del');
  var arr = document.getElementsByTagName('edit-x');
  var itemNames = '';
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].innerHTML == 'X') { itemNames += ',' + arr[i].getAttribute('name'); }
    }
    if (itemNames.length > 0) {
      objHidden.value = itemNames.substring(1);
      objHidden.form.submit();
    }
  }
  return false;
}
