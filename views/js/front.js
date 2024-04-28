/**
* 2007-2024 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2024 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

let actualSlidePosition = 0;

function carousel() {
    let cards = Array.from(document.getElementsByClassName("pc-card"));
    let left = document.getElementById('pc-left');
    let right = document.getElementById('pc-right');
    let visibleSlides = 4;
    setButtons(left, right, cards, visibleSlides);
}

function slide(cards) {
    console.log(actualSlidePosition);
    cards.forEach(card =>{
        card.style.transform = 'translateX(-' + actualSlidePosition + 'px)';
    });
}

function slideRight(slideLength, visibleSlides, cards) {
    if(actualSlidePosition <= (cards.length-visibleSlides-1)*slideLength) {
        actualSlidePosition += slideLength;
        slide(cards, slideLength);
    }
}

function slideLeft(slideLength, cards) {
    if(actualSlidePosition >= slideLength) {
        actualSlidePosition -= slideLength;
        slide(cards, slideLength);
    }
}

function setButtons(left, right, cards, visibleSlides) {
    let slideLength = cards[0].getBoundingClientRect().width;
    left.addEventListener("click", () => {
        if(slideLength === 0) {
            slideLength = cards[0].getBoundingClientRect().width;
        }
        slideLeft(slideLength, cards)
    });

    right.addEventListener("click", () => {
        if(slideLength === 0) {
            slideLength = cards[0].getBoundingClientRect().width;
        }
        slideRight(slideLength, visibleSlides, cards);
    });

    document.addEventListener("keydown", (key) => {
        if (key.code === 'ArrowRight') {
            if(slideLength === 0) {
                slideLength = cards[0].getBoundingClientRect().width;
            }
            slideRight(slideLength, visibleSlides, cards);
        }
        if (key.code === 'ArrowLeft') {
            if(slideLength === 0) {
                slideLength = cards[0].getBoundingClientRect().width;
            }
            slideLeft(slideLength, cards)
        }
    });
}
