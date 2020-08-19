function handleMenuIcon(urlHome) {
  var pageW = document.documentElement.clientWidth;
  window.location = (pageW < 600) ?
    urlHome + "hm-menu" :
    urlHome + "sitemap";
}

/* disable Enter key from submitting the form */
function ignore13() {
  return (window.event.keyCode != 13);
}

function setHidden(objKey, objValue) {
  document.getElementById(objKey).value = objValue;
}

function submitForm(obj) {
  document.getElementById('page-y').value = window.scrollY;
  document.getElementById('page-w').value = document.documentElement.clientWidth;
  obj.form.submit();
}

function submitHidden(objId, objValue) {
  var obj = document.getElementById(objId);
  obj.value = objValue;
  obj.form.submit();
}

function submitHidden2(objId, objValue) {
  document.getElementById('page-y').value = window.scrollY;
  document.getElementById('page-w').value = document.documentElement.clientWidth;
  submitHidden(objId, objValue);
}

function snh(objId) {
  var obj = document.getElementById(objId);
  if (obj.style.display == 'none') { obj.style.display = 'block'; }
  else { obj.style.display = 'none'; }
}

function snhItem(handler, objName, objIndex) {
  if (handler.className == objName + '-show') {
    handler.className = objName + '-hide';
    document.getElementById(objName + objIndex).style.display = 'block';
  }
  else {
    handler.className = objName + '-show';
    document.getElementById(objName + objIndex).style.display = 'none';
  }
}

function snhGroup(handler, groupName) {
  if (handler.className == groupName + '-default') {
    handler.className = groupName + '-defined';
    document.getElementById(groupName).className = groupName + '-defined';
  }
  else {
    handler.className = groupName + '-default';
    document.getElementById(groupName).className = groupName + '-default';
  }
}

function mol(handler, objId) {
  var obj = document.getElementById(objId);
  if (handler.innerHTML == 'show more') {
    handler.innerHTML = 'show less';
    obj.style.display = 'block';
  }
  else {
    handler.innerHTML = 'show more';
    obj.style.display = 'none';
  }
}

function hmfindStock(urlHome) {
  var obj = document.getElementById('hmfind');
  if (obj.value.length > 0) {
    window.location = urlHome + 'stocks?symbol=' + obj.value;
  }
  return false;
}

function setPageY() {
  document.getElementById('page-y').value = window.scrollY;
}

function resetPageY() {
  document.getElementById('page-y').value = 0;
}

function setPageW() {
  document.getElementById('page-w').value = document.documentElement.clientWidth;
}

function positionPage(pageY) {
  window.scroll({top: pageY, left:0, behavior: 'smooth'});
}

function toggleVis(obj, idInput) {
  var objInput = document.getElementById(idInput);
  if (objInput.type == "password") {
    objInput.type = "text";
    obj.checked = true;
  }
  else {
    objInput.type = "password";
    obj.checked = false;
  }
}
