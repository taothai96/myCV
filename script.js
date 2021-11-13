$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script // ////////////////////////////////////////////////////////////////////////////
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script // ////////////////////////////////////////////////////////////////////////////
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script ^ ----// ////////////////////////////////////////////////////////////////////////////
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script----// ////////////////////////////////////////////////////////////////////////////
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script// ////////////////////////////////////////////////////////////////////////////
    var typed = new Typed(".typing", {
        strings: ["I'm a 22 year old", "Have a passion for programming", "Explore and learn"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["22 year old", "Desire Developer Frontend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
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
    });


    // ///////////////////////////////////////
    const filterItem = document.querySelector(".items");
    const filterImg = document.querySelectorAll(".gallery .image");
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data-name value is equal to images data-name value
                //or user selected item data-name value is equal to "all"
                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide"); //first remove the hide class from the image
                    image.classList.add("show"); //add show class in image
                } else {
                    image.classList.add("hide"); //add hide class in image
                    image.classList.remove("show"); //remove show class from the image
                }
            });
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    }
    //fullscreen image preview function
    //selecting all required elements
    const previewBox = document.querySelector(".preview-box"),
        categoryName = previewBox.querySelector(".title p"),
        previewImg = previewBox.querySelector("img"),
        closeIcon = previewBox.querySelector(".icon"),
        shadow = document.querySelector(".shadow");
    function preview(element) {
        //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
        document.querySelector("body").style.overflow = "hidden";
        let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
        let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
        previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
        categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
        previewBox.classList.add("show"); //show the preview image box
        shadow.classList.add("show"); //show the light grey background
        closeIcon.onclick = () => { //if user click on close icon of preview box
            previewBox.classList.remove("show"); //hide the preview box
            shadow.classList.remove("show"); //hide the light grey background
            document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
        }
    }
});