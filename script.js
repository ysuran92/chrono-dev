function popUpCrono() {
    var popup = document.createElement('div');
    popup.className = 'popupCrono';
    popup.id = 'popupCrono';
    var cancel = document.createElement('div');
    cancel.className = 'cancel';
    cancel.innerHTML = 'close';
    cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
    var message = document.createElement('span');
    message.innerHTML = "This is a test message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}