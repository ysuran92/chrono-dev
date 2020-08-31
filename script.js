(function($) { // Begin jQuery
    $(function() { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
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

function appendNoCancel() {
    popup.appendChild(message);
    document.getElementById("popupArea").appendChild(popup);
}

if ($(window).width() < 1280) {

    function popUpCrono() {
        popup.className = 'popupClass';
        popup.id = 'popupCrono';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Crono </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 70 <br> MP: 8 <br> Evade: 8 <br> Hit: 8 <br> Magic: 5 <br> M.Def: 2 <br> Power: 5 <br> Stamina: 8 <br> Speed: 12
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpLucca() {
        popup.className = 'popupClass';
        popup.id = 'popupLucca';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Lucca </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 62 <br> MP: 12 <br> Evade: 7 <br> Hit: 8 <br> Magic: 8 <br> M.Def: 7 <br> Power: 2 <br> Stamina: 6 <br> Speed: 6
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpFrog() {
        popup.className = 'popupClass';
        popup.id = 'popupFrog';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Frog </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 80 <br> MP: 4 <br> Evade: 8 <br> Hit: 8 <br> Magic: 6 <br> M.Def: 3 <br> Power: 4 <br> Stamina: 8 <br> Speed: 11
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpMarle() {
        popup.className = 'popupClass';
        popup.id = 'popupMarle';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Marle </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 65 <br> MP: 12 <br> Evade: 6 <br> Hit: 8 <br> Magic: 8 <br> M.Def: 8 <br> Power: 2 <br> Stamina: 6 <br> Speed: 8
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpRobo() {
        popup.className = 'popupClass';
        popup.id = 'popupRobo';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Robo </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 130 <br> MP: 6 <br> Evade: 7 <br> Hit: 7 <br> Magic: 3 <br> M.Def: 1 <br> Power: 7 <br> Stamina: 10 <br> Speed: 6
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpMagus() {
        popup.className = 'popupClass';
        popup.id = 'popupMagus';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Magus </h1>
        </div>
        <div class="col-6 popupDesc">
            HP: 110 <br> MP: 14 <br> Evade: 10 <br> Hit: 12 <br> Magic: 10 <br> M.Def: 9 <br> Power: 8 <br> Stamina: 7 <br> Speed: 12
        </div>
    </div>
</div> `;
        appendNoCancel();
    }

    function popUpAyla() {
        popup.className = 'popupClass';
        popup.id = 'popupAyla';
        message.innerHTML = ` 
    <div>
            <h1> Ayla </h1>
            </div>
            <p class="popupDesc">
            HP: 80 <br> MP: 4 <br> Evade: 12 <br> Hit: 10 <br> Magic: 3 <br> M.Def: 1 <br> Power: 10 <br> Stamina: 9 <br> Speed: 13
            </p>
            </div> `;
        appendNoCancel();
    }

} else if ($(window).width() <= 1366 && $(window).width() > 1280) {

    function popUpCrono() {
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
        popup.id = 'popupMarle';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Marle </h1>
            <img src="assets/Marle.webp" alt="marle">
        </div>
        <div class="col-6 popupDesc">
            HP: 65 <br> MP: 12 <br> Evade: 6 <br> Hit: 8 <br> Magic: 8 <br> M.Def: 8 <br> Power: 2 <br> Stamina: 6 <br> Speed: 8
        </div>
    </div>
</div> `;
        appendAny();
    }

    function popUpRobo() {
        popup.className = 'popupClass';
        popup.id = 'popupRobo';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Robo </h1>
            <img src="assets/Robo.webp" alt="robo">
        </div>
        <div class="col-6 popupDesc">
            HP: 130 <br> MP: 6 <br> Evade: 7 <br> Hit: 7 <br> Magic: 3 <br> M.Def: 1 <br> Power: 7 <br> Stamina: 10 <br> Speed: 6
        </div>
    </div>
</div> `;
        appendAny();
    }

    function popUpMagus() {
        popup.className = 'popupClass';
        popup.id = 'popupMagus';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Magus </h1>
            <img src="assets/Magus.webp" alt="magus">
        </div>
        <div class="col-6 popupDesc">
            HP: 110 <br> MP: 14 <br> Evade: 10 <br> Hit: 12 <br> Magic: 10 <br> M.Def: 9 <br> Power: 8 <br> Stamina: 7 <br> Speed: 12
        </div>
    </div>
</div> `;
        appendAny();
    }

    function popUpAyla() {
        popup.className = 'popupClass';
        popup.id = 'popupAyla';
        message.innerHTML = ` 
    <div class="container"> <div class="row">
        <div class="col-3">
            <h1> Ayla </h1>
            <img src="assets/Ayla.png" alt="ayla">
        </div>
        <div class="col-6 popupDesc">
            HP: 80 <br> MP: 4 <br> Evade: 12 <br> Hit: 10 <br> Magic: 3 <br> M.Def: 1 <br> Power: 10 <br> Stamina: 9 <br> Speed: 13
        </div>
    </div>
</div> `;
        appendAny();
    }
    ///////////////////////////////////////////////// LEAVE THE FOLLOWING AS IS /////////////////////////////////////////////////////////
} else if ($(window).width() > 1366) {
    function popUpCrono() {
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
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
        popup.className = 'popupClass';
        popup.id = 'popupMarle';
        message.innerHTML = ` 
<div class="container"> <div class="row">
    <div class="col-3">
        <h1> Marle </h1>
        <img src="assets/Marle.webp" alt="marle">
    </div>
    <div class="col-6 popupDesc">
        HP: 65 <br> MP: 12 <br> Evade: 6 <br> Hit: 8 <br> Magic: 8 <br> M.Def: 8 <br> Power: 2 <br> Stamina: 6 <br> Speed: 8
    </div>
</div>
</div> `;
        appendAny();
    }

    function popUpRobo() {
        popup.className = 'popupClass';
        popup.id = 'popupRobo';
        message.innerHTML = ` 
<div class="container"> <div class="row">
    <div class="col-3">
        <h1> Robo </h1>
        <img src="assets/Robo.webp" alt="robo">
    </div>
    <div class="col-6 popupDesc">
        HP: 130 <br> MP: 6 <br> Evade: 7 <br> Hit: 7 <br> Magic: 3 <br> M.Def: 1 <br> Power: 7 <br> Stamina: 10 <br> Speed: 6
    </div>
</div>
</div> `;
        appendAny();
    }

    function popUpMagus() {
        popup.className = 'popupClass';
        popup.id = 'popupMagus';
        message.innerHTML = ` 
<div class="container"> <div class="row">
    <div class="col-3">
        <h1> Magus </h1>
        <img src="assets/Magus.webp" alt="magus">
    </div>
    <div class="col-6 popupDesc">
        HP: 110 <br> MP: 14 <br> Evade: 10 <br> Hit: 12 <br> Magic: 10 <br> M.Def: 9 <br> Power: 8 <br> Stamina: 7 <br> Speed: 12
    </div>
</div>
</div> `;
        appendAny();
    }

    function popUpAyla() {
        popup.className = 'popupClass';
        popup.id = 'popupAyla';
        message.innerHTML = ` 
<div class="container"> <div class="row">
    <div class="col-3">
        <h1> Ayla </h1>
        <img src="assets/Ayla.png" alt="ayla">
    </div>
    <div class="col-6 popupDesc">
        HP: 80 <br> MP: 4 <br> Evade: 12 <br> Hit: 10 <br> Magic: 3 <br> M.Def: 1 <br> Power: 10 <br> Stamina: 9 <br> Speed: 13
    </div>
</div>
</div> `;
        appendAny();
    }
}

////////////////////////////
// End popup divs for page 5

if ($(window).width() < 1280) {
    $(document).ready(function() {
        $('#nav-toggle').mouseup(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.popupClass').toggle();
        });
        $('.nav-list').mouseup(function(e) {
            e.stopPropagation();
        });
        $('body').mouseup(function() {
            $('.nav-list').slideUp(400);
            $('#nav-toggle').removeClass("active");
        });
    });
}

$(document).ready(function() {
    $('.link').mouseup(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.popupClass').toggle();
    });
    $('.popupClass').mouseup(function(e) {
        e.stopPropagation();
    });
    $('body').mouseup(function() {
        $('.popupClass').hide();
    });
});