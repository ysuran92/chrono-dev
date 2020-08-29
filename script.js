function popUpCrono() {
    let popup = document.createElement('div');
    popup.className = 'popupCrono';
    popup.id = 'popupCrono';
    let cancel = document.createElement('div');
    cancel.className = 'cancel';
    cancel.innerHTML = 'close';
    cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
    let message = document.createElement('span');
    message.innerHTML = "This is a Crono message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}

function popUpLucca() {
    let popup = document.createElement('div');
    popup.className = 'popupLucca';
    popup.id = 'popupLucca';
    let cancel = document.createElement('div');
    cancel.className = 'cancel';
    cancel.innerHTML = 'close';
    cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
    let message = document.createElement('span');
    message.innerHTML = "This is a Lucca message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}