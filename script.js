(function($) { // Begin jQuery
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery

// Popup divs for page 5

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
    document.getElementById("popupArea").appendChild(popup);
}

function popUpLucca() {
    popup.className = 'popupLucca';
    popup.id = 'popupLucca';
    message.innerHTML = "This is a Lucca message";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.getElementById("popupArea").appendChild(popup);
}

// End popup divs for page 5