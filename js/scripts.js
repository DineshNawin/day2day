/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

const productsStyle = ""; //"single row" to show all products in single row in mobile view

window.addEventListener('DOMContentLoaded', event => {
    let owlChanged = false;
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    let contents = {
        featuresNav: {
            english: "Products",
            tamil: "பொருட்கள்"
        },
        downloadNav: {
            english: "Download",
            tamil: "பதிவிறக்கம்"
        },
        // feedbackNav: {
        //     english: "Send Feedback",
        //     tamil: "கருத்துகளை பதிவிடவும்"
        // },
        headerNav: {
            english: "Day2Day Madurai",
            tamil: "Day2Day மதுரை"
        },
        descriptionNav: {
            english: "Exclusively in MADURAI",
            tamil: "மதுரை முழுவதும்"
        },
        taglineNav: {
            english: "Get your daily needs!",
            tamil: "உங்கள் அன்றாட தேவைகளைப் பெறுங்கள்!"
        },
        vegNav: {
            english: "Vegetables and Fruits",
            tamil: "காய்கறிகள் மற்றும் பழங்கள்"
        },
        vegContentNav:{
            english: "Fresh veggies & fruits at market price",
            tamil: "சந்தை விலையில் புதிய காய்கறிகள் மற்றும் பழங்கள்"
        },
        groceryNav:{
            english: "Groceries",
            tamil:"மளிகை பொருட்கள்"
        },
        groceryContentNav:{
            english: "All types of grocery available",
            tamil:"அனைத்து வகையான மளிகை பொருட்கள் கிடைக்கும்"
        },
        chickenNav:{
            english:"Chicken",
            tamil:"கோழி இறைச்சி"
        },
        chickenContentNav:{
            english:"Tender halal cuts of chicken,straight from the farm",
            tamil:"ஹலால் வெட்டப்பட்ட கோழி, பண்ணையில் இருந்து நேராக"
        },
        countrychickenNav:{
            english:"Country Chicken",
            tamil:"நாட்டு கோழி"
        },
        countrychickenContentNav:{
            english:"100% original , Freshly from farm",
            tamil:"100% அசல்"
        },
        muttonNav:{
            english:"Mutton",
            tamil:"ஆட்டிறைச்சி",
        },
        muttonContentNav:{
            english:"Premium Tender Goat (velladu)and halal cut",
            tamil:"வெள்ளாடு, ஹலால் செய்யப்பட்டது",
        },
        fishNav:{
            english:"Fish",
            tamil:"மீன்",
        },
        fishContentNav:{
            english:"sea to door",
            tamil:"கடலில் இருந்து இறக்குமதி செய்யப்பட்டது",
        },
        offerNav:{
            english:"Offers",
            tamil:"",
        },
    }

    let updateContent = languageId => {
        for(let content in contents) {
            $('#'+content).text(contents[content][languageId])
        }
    }
    let toggleLanguageHandler = (languageId, hideLang) => {
        $('#'+languageId).on('click', event=> {
            $('#'+languageId).parent().css('display', 'none');
            $('#'+hideLang).parent().css('display', 'block');
            updateContent(languageId)
            window.localStorage.setItem('preferredlanguageday2day', languageId);
        });
    }
    //If user changes the language, that will be set as default language from  the next reload.
    if((preferredLanguage=window.localStorage.getItem('preferredlanguageday2day'))) {
        updateContent(preferredLanguage);
        if(preferredLanguage == 'tamil')
            $('#english').parent().show();
        else
            $('#tamil').parent().show();
    } 
    else {
        updateContent('english')
        $('#tamil').parent().show()
    }
    toggleLanguageHandler('english', 'tamil');
    toggleLanguageHandler('tamil', 'english');

    $(".owl-carousel").owlCarousel({
        margin: 100,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
        items: 1,
        loop: true,
        responsive: {
            768: {
                center: true,
                items: 2
            }
        }
    });

    if(productsStyle === "single row") {
        $('.features-mb-diff-container').removeClass('features-mb-diff-container');
        $('.features-mb-diff').removeClass('features-mb-diff');
    }
});
