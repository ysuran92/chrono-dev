let popup = document.createElement('div');
let cancel = document.createElement('div');
cancel.className = 'cancel';
cancel.innerHTML = 'close';
cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
let message = document.createElement('span');

function popUpCrono() {
    popup.className = 'popupCrono';
    popup.id = 'popupCrono';
    message.innerHTML = "This is a Crono message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}

function popUpLucca() {
    popup.className = 'popupLucca';
    popup.id = 'popupLucca';
    message.innerHTML = "This is a Lucca message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}