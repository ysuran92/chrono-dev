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
cancel.innerHTML = 'X';
cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
let message = document.createElement('span');

function appendAny() {
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.getElementById("popupArea").appendChild(popup);
}

function popUpCrono() {
    popup.className = 'popupCrono';
    popup.id = 'popupCrono';
    message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Crono </h1>
            <img src="assets/Crono.webp" alt="crono">
        </div>
        <div class="col-6 popupDesc">
            HP: 70 <br> MP: 8 <br> Evade: 8 <br> Hit: 8 <br> Magic: 5 <br> M.Def: 2 <br> Power: 5 <br> Stamina: 8 <br> Speed: 12
        </div>
    </div>
</div> `;
    appendAny();
}

function popUpLucca() {
    popup.className = 'popupLucca';
    popup.id = 'popupLucca';
    message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Lucca </h1>
            <img src="assets/Lucca.webp" alt="lucca">
        </div>
        <div class="col-6 popupDesc">
            HP: 62 <br> MP: 12 <br> Evade: 7 <br> Hit: 8 <br> Magic: 8 <br> M.Def: 7 <br> Power: 2 <br> Stamina: 6 <br> Speed: 6
        </div>
    </div>
</div> `;
    appendAny();
}

function popUpFrog() {
    popup.className = 'popupFrog';
    popup.id = 'popupFrog';
    message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Frog </h1>
            <img src="assets/Frog.webp" alt="frog">
        </div>
        <div class="col-6 popupDesc">
            HP: 80 <br> MP: 4 <br> Evade: 8 <br> Hit: 8 <br> Magic: 6 <br> M.Def: 3 <br> Power: 4 <br> Stamina: 8 <br> Speed: 11
        </div>
    </div>
</div> `;
    appendAny();
}

function popUpMarle() {
    popup.className = 'popupMarle';
    popup.id = 'popupMarle';
    message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Marle </h1>
            <img src="assets/Marle.webp" alt="marle">
        </div>
        <div class="col-6 popupDesc">
            HP: 80 <br> MP: 4 <br> Evade: 8 <br> Hit: 8 <br> Magic: 6 <br> M.Def: 3 <br> Power: 4 <br> Stamina: 8 <br> Speed: 11
        </div>
    </div>
</div> `;
    appendAny();
}

// End popup divs for page 5