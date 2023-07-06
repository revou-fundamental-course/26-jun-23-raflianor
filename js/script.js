const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');


contactForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = emailInput => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}

const validateInputs = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneNumberInputValue = phoneNumberInput.value.trim();


    if(nameValue === '') {
        setError(nameInput, 'Nama lengkap harus diisi');
    } else {
        setSuccess(nameInput);
    }

    if(emailValue === '') {
        setError(emailInput, 'Email harus diisi');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Alamat email tidak valid');
    } else {
        setSuccess(emailInput);
    }

    if(phoneNumberInputValue === '') {
        setError(phoneNumberInput, 'Nomor telepom harus diisi');
    } else if (phoneNumberInputValue.length < 11 || phoneNumberInputValue.length > 13) {
        setError(phoneNumberInput, 'Nomor telepon tidak valid.')
    } else {
        setSuccess(phoneNumberInput);
    }

};


// AUTO SLIDE

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "img/slider/slider-image-1.jpg";
images[1] = "img/slider/slider-image-2.jpg";
images[2] = "img/slider/slider-image-3.jpg";
images[3] = "img/slider/slider-image-4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;