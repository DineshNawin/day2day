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
            english: "Day2Day - Madurai",
            tamil: "Day2Day"
        },
        descriptionNav: {
            english: "Get your daily needs!",
            tamil: "கருத்துகளை பதிவிடவும்"
        },
        vegNav: {
            english: "Vegetables",
            tamil: "காய்கறிகள்"
        },
        vegContentNav:{
            english: "Fresh Vegetables at wholesale price",
            tamil: "மொத்த விலையில் புதிய காய்கறிகள்"
        }
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
