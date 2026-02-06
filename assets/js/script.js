$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header__nav').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.header__nav').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.header__nav').removeClass('transition-menu');
        }
    });
    $('.header__menu ul li a').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.headerheader__nav__cnt').removeClass('transition-menu');
        $('body').removeClass('body_fix');
    })
});


let partnersSwiper = new Swiper(".our-partners-slider", {
    slidesPerView: 7,
    spaceBetween: 18,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 3000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {
        '1369': {
            slidesPerView: 7,
            spaceBetween: 18,
        },
        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    }
});


let reviewsSwiper = new Swiper(".customer-reviews-slider", {
    slidesPerView: 6,
    spaceBetween: 18,
    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 6,
            spaceBetween: 18,
        },
        '1199': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '620': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 8,
        },
    }
});


if ($('.see-reviews')) {
    $('.see-reviews').on('click', function () {
        $('.customer-reviews').addClass('customer-reviews-opac')
        $(this).parent().parent().addClass('customer-reviews-active');
    });
}

if ($('.hide-btn')) {
    $('.hide-btn').on('click', function () {
        $('.customer-reviews').removeClass('customer-reviews-opac')
        $('.customer-reviews-box').removeClass('customer-reviews-active');
    });
}


if ($('.catalog-btn')) {
    $('.catalog-btn').on('click', function () {
        $('.head-catalog').toggleClass('head-catalog-active');
    });
}


let sliders = document.getElementsByClassName('nonlinear');
for (let i = 0; i < sliders.length; i++) {
    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);

    });
    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];
        nodes[handle].value = parseInt(values[handle]);
    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
    });
}


if ($('.open-filter-mob')) {
    $('.open-filter-mob').on('click', function () {
        $('.catalog-filter').addClass('catalog-filter-active')
    });
}


$('.close-filter').on('click', function () {
    $('.catalog-filter').removeClass('catalog-filter-active')
});


let newsSwiper = new Swiper(".news-cnt-slider", {
    slidesPerView: 3,
    spaceBetween: 18,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".news-button-next",
        prevEl: ".news-button-prev",
    },
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '560': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});


let productSwiper = new Swiper(".product-small__slider", {
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
});
let productSwiperSm = new Swiper(".product-cat__slider", {
    slidesPerView: 1,
    thumbs: {
        swiper: productSwiper,
    },
    loop: true,

});


$('.eye-pass').on('click', function () {
    $(this).toggleClass('eye-pass-active');
});


$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
});
$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$('.save-new-address').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});


$(document).ready(function () {
    const orderCardItems = $('.order-item-js')
    if (orderCardItems.length) {
        $(orderCardItems).each((index, item) => {
            let counter = 1
            updateCounterValue(item, counter)

            $(item).find('.decrement').on('click', function () {
                if (counter > 1) {
                    counter--
                    updateCounterValue(item, counter)
                } else {
                    $(item).remove()
                }
            })
            $(item).find('.increment').on('click', function () {
                counter++
                updateCounterValue(item, counter)
            })
        })
    }


    function updateCounterValue(item, counter) {
        $(item).find('.catalog-count-value').val(counter)
        if (counter === 1) {
            $(item).find('.decrement .icons').addClass('icon-trash')
        } else {
            $(item).find('.decrement .icons').removeClass('icon-trash').addClass('icon-minus')
        }
    }


});


$('.select-from-list').on('click', function (e) {
    $(this).parent().toggleClass('receiving-address-active');
    e.stopPropagation()
});

$('.receiving-address-drop ul li').on('click', function () {
    // let text_in = $('.select-from-list').html();
    let selected_text = $(this).html();
    $('.select-from-list').html(selected_text);
    // $(this).html(text_in)
    $('.receiving-address').removeClass('receiving-address-active');

});
$('.save-new-address').on('click', function () {
    let receivingAddress = $('.address-add-area').val();
    $('.select-from-list').html(receivingAddress);
})
$(window).on('click', function (e) {
    let menuSort = $('.select-from-list');
    if (e.target !== menuSort) {
        menuSort.removeClass('receiving-address-active')
    }
});



$('.check-mail').change(function() {
    if ($(this).find(':checked')) {
        $('.for-kupper').toggleClass('mail-act')
    }
});

$('.check-inp-cart').change(function() {
    if ($(this).find(':checked')) {
        $('.for-cart-give').toggleClass('for-cart-give-act')
    }
});
$(document).ready(function () {
        const textAreaList = [{
            name: 'address-1'
        }]
        const textAreaItems = $('.personal-add-textarea')
        const addAddress = $('.add-address-js')
        if (textAreaItems) {
            updateList()

        }

        if (addAddress) {
            $(addAddress).on('click', function () {
                textAreaList.push({name: `address-${textAreaList.length + 1}`})
                updateList()
            })
        }

        function deleteItem(index) {
            textAreaList.splice(index, 1)
            updateList()
        }

        function updateList() {
            $(textAreaItems).html('')
            textAreaList.forEach((item, index) => {
                $(textAreaItems).append(` 
             <div class="personal-area__textarea">
                <small>Адрес получения заказа ${index + 1}:</small>
               <div class="textarea-item" >
                   <label>
                       <textarea name="${item.name}" ></textarea>
                   </label>
                   ${textAreaList.length > 1 ? `<span class="icon icon-trash delete-address"></span>` : ''}
               </div>
            </div>
            `)
            })

            const deleteItemList = $(textAreaItems).find('.delete-address')
            if (deleteItemList.length) {
                $(deleteItemList).each(function(index, itemIcon) {
                    $(itemIcon).on('click', function () {
                        deleteItem(index)
                    })
                })
            }
        }
    }
)





