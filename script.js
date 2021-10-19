$(document).ready(function () {

    $(window).scroll(function () {

        if (this.scrollY > 20) {

            $('nav').addClass('sticky');
        } else {

            $('nav').removeClass('sticky');
        }

        if (this.scrollY > 300) {

            $('.scroll-up-btn').addClass('show');
        } else {

            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.menu-btn').click(function () {
        $('nav .nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
    })

});

const svcBtn = document.querySelector('.service__btn');

svcBtn.addEventListener('click', function (e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    // ripples.style.top = y + 'px';

    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 500);
});

const ap = new APlayer({

    container: document.getElementById('aplayer'),
    listFolded: true,
    theme: '#ff7300',
    listMaxHeight: 120,

    audio: [
        {
            name: 'Bad things',
            artist: 'MGK',
            url: 'https://dl.beelody.com/Free/2019/6/This%20Is%20Machine%20Gun%20Kelly%20%282019%29%20MELOVAZ.NET/01%20Bad%20Things.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
        {
            name: 'Glass House',
            artist: 'MGK',
            url: 'https://dl.beelody.com/Free/2019/7/Machine%20Gun%20Kelly%20-%20Hotel%20Diablo%20%282019%29%20MELOVAZ.NET/04%20Glass%20House.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
        {
            name: 'I Think Im OKAY',
            artist: 'MGK',
            url: 'https://dl.beelody.com/Free/2019/6/This%20Is%20Machine%20Gun%20Kelly%20%282019%29%20MELOVAZ.NET/11%20I%20Think%20I%27m%20OKAY.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
        {
            name: 'NO MORE SAD SONG',
            artist: 'MGK',
            url: 'https://dl.beelody.com/Free/2019/6/This%20Is%20Machine%20Gun%20Kelly%20%282019%29%20MELOVAZ.NET/05%20No%20More%20Sad%20Songs.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
        {
            name: 'LET YOU GO',
            artist: 'MGK',
            url: 'https://dl.beelody.com/Free/2019/6/This%20Is%20Machine%20Gun%20Kelly%20%282019%29%20MELOVAZ.NET/12%20Let%20You%20Go.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
    ]
})

// aplayer click

$('.card').on('click', function (e) {

    var dataSwitchId = $(this).attr('data-switch');

    ap.list.switch(dataSwitchId);

    ap.play();
    $('#aplayer').addClass('show');

    $('.scroll-up-btn').addClass('showTop');
});
$('.aplayer-icon.aplayer-icon-menu').click(function () {

    $('.scroll-up-btn').toggleClass('showTp')
});

var type = new Typed(".logo__text", {
    strings: ["K-MUSIC"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
});

const boxes = document.querySelectorAll('.box');
let width = window.screen.availWidth

boxes.forEach(box => {

    box.classList.remove('carousel-item');

    if (width <= 768) {

        box.classList.add('carousel-item');
        console.log(width);
    }
});