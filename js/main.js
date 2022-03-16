// need to make a function that gets rid of the preloader
function counter () {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }
    },60)
}
counter()
// creative page mouse-scroll Progress Bar
let cursorMeter = document.getElementById('cursorMeter');
document.addEventListener('mousemove', function (e) {
    cursorMeter.style.top = e.clientY + 'px';
    cursorMeter.style.left = e.clientX + 'px';
})
let scroll = document.getElementById('scrollBar1');
let persent = document.getElementById('persent');
let scrollBar = document.getElementById('scrollBar');
let totalHeight2 = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let Progress = (window.pageYOffset / totalHeight2) * 100;
    scrollBar.style.width = Progress + "%";
    persent.innerHTML = "Page Scrolled " + Math.round(Progress) + "%";
    // creative page scroll Progress Bar
    let scrollHeight1 = (window.pageYOffset / totalHeight2) * 100;
    scroll.style.height = scrollHeight1 + "%";
}











// add notification in the website
setTimeout(function () {
    document.querySelector('.notify-alert-box').style.top = '0'
}, 1000);
document.querySelector('#notify-button').onclick = async () => {
    localStorage.setItem('notify', 'true');
    notifyTrue();
    notifyOption()
}
function notifyTrue() {
    if (localStorage.getItem('notify', 'true')) {
        document.querySelector('.notify-alert-box').style.display = 'none'
    }
}
notifyTrue();
document.querySelector('#notify-cancel-button').onclick = async () => {
    localStorage.setItem('notify', 'false');
    notifyFalse();
}
function notifyFalse() {
    if (localStorage.getItem('notify', 'true')) {
        document.querySelector('.notify-alert-box').style.display = 'none'
    }
}
notifyFalse();
function showNotification() {
    var NotificationBody = new Notification('New message for Google', {
        body: 'Google World',
        icon: 'image/google.png'
    })
    NotificationBody.onclick = (e) => {
        window.location.href = 'https://google.com'
    }
}
function showNotification2() {
    var NotificationBody = new Notification('New message for Youtube', {
        body: 'Youtube World',
        icon: 'image/youtube.png'
    })
    NotificationBody.onclick = (e) => {
        window.location.href = 'http://youtube.com'
    }
}
function showNotification3() {
    var NotificationBody = new Notification('New message for Hotels', {
        body: 'Hotels World',
        icon: 'image/logo.png'
    })
    NotificationBody.onclick = (e) => {
        window.location.href = 'http://127.0.0.1:5502/#'
    }
}
function notifyOption() {
    if (localStorage.notify == 'true') {
        if (Notification.permission == 'granted') {
            //showNotification();
            if (localStorage.notifyMessage === undefined) {
                localStorage.setItem("notifyMessage", "true");
                showNotification();
            }
            if (localStorage.notifyMessage2 === undefined) {
                localStorage.setItem("notifyMessage2", "true");
                showNotification2();
            }
            if (localStorage.notifyMessage3 === undefined) {
                localStorage.setItem("notifyMessage3", "true");
                showNotification3();
            }
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission == 'granted') {
                    if (localStorage.notifyMessage === undefined) {
                        localStorage.setItem("notifyMessage", "true");
                        showNotification();
                    }
                }
            })
        }
    }
}
notifyOption();

// make a model
function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}
// make a rating website
const btn = document.querySelector(".btn3 button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = function () {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = function () {
        widget.style.display = "block";
        post.style.display = "none";
        return false;
    }
}
// make  a model and make a login  and check input and check email and password
function popupToggle2() {
    const popup2 = document.getElementById('popup2');
    popup2.classList.toggle('active');
}
const slidepage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".Submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;
firstNextBtn.addEventListener("click", function () {
    slidepage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function () {
    slidepage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function () {
    slidepage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function () {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        let phone = document.getElementById('phone').value;
        let nameUser = document.getElementById('name-users');
        let phoneUser = document.getElementById('phone-user');
        phoneUser.innerHTML = phone;
        nameUser.innerHTML = "Hello " + firstName + " " + lastName;
        confirm("You are confirm email and password");
        alert(firstName + " " + lastName + " successfully Signed up"  + "     Email: " + email + "     Password: " + password);
        // location.reload();
    }, 800);
});
prevBtnSec.addEventListener("click", function () {
    slidepage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function () {
    slidepage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function () {
    slidepage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});
function validationEmail() {
    var emailBox = document.querySelector('.emailBox');
    var email = document.getElementById("email").value;
    var emailText = document.getElementById("email-text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        emailBox.classList.add("valid");
        emailBox.classList.remove("invalid");
        emailText.innerHTML = "Your Email Address in valid.";
        emailText.style.color = "#00ff00";
    } else {
        emailBox.classList.remove("valid");
        emailBox.classList.add("invalid");
        emailText.innerHTML = "Please Enter Valid Email Address";
        emailText.style.color = "#ff0000";
    }
    if (email == "") {
        emailBox.classList.remove("valid");
        emailBox.classList.remove("invalid");
        emailText.innerHTML = "";
        emailText.style.color = "#00ff00";
    }
}
function validationPassword() {
    var passBox = document.querySelector(".passBox");
    var password = document.getElementById("password").value;
    var passText = document.getElementById("pass-text");
    var passPattern = /^[A-Za-z]\w{7,14}$/;
    if (password.match(passPattern)) {
        passBox.classList.add("valid");
        passBox.classList.remove("invalid");
        passText.innerHTML = "Your Password in valid";
        passText.style.color = "#00ff00";
    } else {
        passBox.classList.remove("valid");
        passBox.classList.add("invalid");
        passText.innerHTML = "Please Enter valid password ";
        passText.style.color = "#ff0000";
    }
    if (password == '') {
        passBox.classList.remove("valid");
        passBox.classList.remove("invalid");
        passText.innerHTML = "";
        passText.style.color = "#00ff00";
    }
}

// chat
$(document).ready(function () {
    $('.chat_icon').click(function (event) {
        $('.chat_box').toggleClass('active');
    })
    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
})
function google(stateWrapper, ready) {
    window.open("https://google.com");
    ready();
}
function bing(stateWrapper, ready) {
    window.open("https://bing.com");
    ready();
}
var rollbackTo = false;
var originalState = false;
function storeState(stateWrapper, ready) {
    rollbackTo = stateWrapper.current;
    console.log("storeState called: ",rollbackTo);
    ready();
}
function rollback(stateWrapper, ready) {
    console.log("rollback called: ", rollbackTo, originalState);
    console.log("answers at the time of user input: ", stateWrapper.answers);
    if(rollbackTo!=false) {
        if(originalState==false) {
            originalState = stateWrapper.current.next;
                console.log('stored original state');
        }
        stateWrapper.current.next = rollbackTo;
        console.log('changed current.next to rollbackTo');
    }
    ready();
}
function restore(stateWrapper, ready) {
    if(originalState != false) {
        stateWrapper.current.next = originalState;
        console.log('changed current.next to originalState');
    }
    ready();
}
jQuery(function($){
    convForm = $('#chat').convform({selectInputStyle: 'disable'});
    console.log(convForm);
});



// make open nav
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('.navbar-collapse').toggleClass('active')
    })
})

// make sticky navbar
let fixnavbar = document.querySelector("nav");
let sticky = fixnavbar.offsetTop;
window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
        fixnavbar.classList.add("sticky");
    } else {
        fixnavbar.classList.remove("sticky");
    }
})


// make to top on page Scroll
window.addEventListener('scroll', function () {
    var scroll = document.querySelector(".scroll-top");
    scroll.classList.toggle("scroll", window.scrollY > 500);
})
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// make dark mode
var toggle = document.querySelector(".toggle");
var body = document.querySelector("body");
toggle.onclick = function () {
    body.classList.toggle('dark');
}



// autocomplete
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var search = ["Afghanistan countris", "Albania countris", "Algeria countris", "Andorra countris", "Angola countris", "Anguilla countris", "Antigua & Barbuda countris", "Argentina countris",
    "Armenia countris", "Aruba countris", "Australia countris", "Austria countris", "Azerbaijan countris", "Bahamas countris", "Bahrain countris", "Bangladesh countris", "Barbados countris", "Belarus countris",
    "Belgium countris", "Belize countris", "Benin countris", "Bermuda countris", "Bhutan countris", "Bolivia countris", "Bosnia & Herzegovina countris", "Botswana countris", "Brazil countris", "British Virgin Islands countris",
    "Brunei countris", "Bulgaria countris", "Burkina Faso countris", "Burundi countris", "Cambodia countris", "Cameroon countris", "Canada countris", "Cape Verde countris", "Cayman Islands countris",
    "Central Arfrican Republic countris", "Chad", "Chile countris", "China countris", "Colombia countris", "Congo countris", "Cook Islands countris", "Costa Rica countris", "Cote D Ivoire countris",
    "Croatia countris", "Cuba countris", "Curacao countris", "Cyprus countris", "Czech Republic countris", "Denmark countris", "Djibouti countris", "Dominica countris", "Dominican Republic countris", "Ecuador countris countris",
    "Egypt countris", "El Salvador countris", "Equatorial Guinea countris", "Eritrea countris", "Estonia countris", "Ethiopia countris", "Falkland Islands countris", "Faroe Islands countris", "Fiji countris",
    "Finland countris", "France countris", "French Polynesia countris", "French West Indies countris", "Gabon countris", "Gambia countris", "Georgia countris", "Germany countris", "Ghana countris", "Gibraltar countris",
    "Greece countris", "Greenland countris", "Grenada countris", "Guam countris", "Guatemala countris", "Guernsey countris", "Guinea countris", "Guinea Bissau countris", "Guyana countris", "Haiti countris", "Honduras countris",
    "Hong Kong countris", "Hungary countris", "Iceland countris", "India countris", "Indonesia countris", "Iran countris", "Iraq countris", "Ireland countris", "Isle of Man countris", "Israel countris", "Italy countris", "Jamaica countris",
    "Japan countris", "Jerseyb countris", "Jordan countris", "Kazakhstan countris", "Kenya countris", "Kiribati countris", "Kosovo countris", "Kuwait countris", "Kyrgyzstan countris", "Laos countris", "Latvia countris", "Lebanon countris",
    "Lesotho countris", "Liberia countris", "Libya countris", "Liechtenstein countris", "Lithuania countris", "Luxembourg countris", "Macau countris", "Macedonia countris", "Madagascar countris", "Malawi countris", "Malaysia countris",
    "Maldives countris", "Mali countris", "Malta countris", "Marshall Islands countris", "Mauritania countris", "Mauritius countris", "Mexico countris", "Micronesia countris", "Moldova countris", "Monaco countris", "Mongolia countris",
    "Montenegro countris", "Montserrat countris", "Morocco countris", "Mozambique countris", "Myanmar countris", "Namibia countris", "Nauro countris", "Nepal countris", "Netherlands countris", "Netherlands Antilles countris",
    "New Caledonia countris", "New Zealand countris", "Nicaragua countris", "Niger countris", "Nigeria countris", "North Korea countris", "Norway countris", "Oman countris", "Pakistan countris", "Palau countris", "Palestine countris",
    "Panama countris", "Papua New Guinea countris", "Paraguay countris", "Peru countris", "Philippines countris", "Poland countris", "Portugal countris", "Puerto Rico countris", "Qatar countris", "Reunion countris", "Romania countris",
    "Russia countris", "Rwanda countris", "Saint Pierre & Miquelon countris", "Samoa countris", "San Marino countris", "Sao Tome and Principe countris", "Saudi Arabia countris", "Senegal countris", "Serbia countris countris",
    "Seychelles countris", "Sierra Leone countris", "Singapore countris", "Slovakia countris", "Slovenia countris", "Solomon Islands countris", "Somalia countris", "South Africa countris", "South Korea countris",
    "South Sudan countris", "Spain countris", "Sri Lanka countris", "St Kitts & Nevis countris", "St Lucia countris", "St Vincent countris", "Sudan countris", "Suriname countris", "Swaziland countris", "Sweden countris",
    "Switzerland countris", "Syria countris", "Taiwan countris", "Tajikistan countris", "Tanzania countris", "Thailand countris", "Timor L'Este countris", "Togo countris", "Tonga countris", "Trinidad & Tobago countris",
    "Tunisia countris", "Turkey countris", "Turkmenistan countris", "Turks & Caicos countris", "Tuvalu countris", "Uganda countris", "Ukraine countris", "United Arab Emirates countris", "United Kingdom countris",
    "United States of America countris", "Uruguay countris", "Uzbekistan countris", "Vanuatu countris", "Vatican City countris", "Venezuela countris", "Vietnam countris", "Virgin Islands (US) countris",
    "Yemen", "Zambia", "Zimbabwe",
    "Atlantis The Palm hotel", "Movenpick/RODA Al Bustan hotel", "Burj Al Arab hotel", "Al Qasr Madinat Resort Jumeirah hotel", "Dar Al Masyaf hotel", "The Harbour hotel & Residence", "Grand Hyatt Dubai hotel", "Jumeirah Beach hotel",
    "Madinat Mina A'Salam hotel", "Marine Beach Resort & Spa hotel", "Metropolitan hotel", "Grand Millennium Dubai hotel", "Millennium Plaza hotel", "Ritz Carlton hotel", "Sheraton Dubai Creek Hotel & Towers hotel", "Sheraton Jumeirah Beach Resort & Towers hotel",
    "Taj Palace hotel", "Jumeirah Emirates Towers hotel", "Mina A' Salam Madinat Jumeirah hotel", "Kempinski hotel Mall of the Emirates", "One&Only Residence & Spa at Royal Mirage hotel", "The Palace The Old Town hotels", "Al Murooj Rotana Dubai hotel",
    "Mina A Salam Beach Hotel Dubai", "Sofitel - Dubai Jumeirah Beach hotel", "Hyatt Regency Dubai hotel", "Dubai Marine Beach Resort & Spa Dubai hotel", "Radisson Royal Hotel", "Samaya Hotel", "Al Murooj Rotana Hotel and Suites", "Gevora Hotel", "JW Marriott Marquis Dubai",
    "The Fairmont Palm Hotel & Resort", "Waldorf Astoria Dubai Palm Jumeirah hotel", "Conrad Dubai hotel"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), search);
let searchbtn = document.getElementById('search');
searchbtn.onclick = function () {
    let url = 'https://www.google.com/search?q=' + myInput.value;
    window.open(url);
}



// make owl-carousel
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
})





