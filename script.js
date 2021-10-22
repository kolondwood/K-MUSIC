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
        {
            name: 'papercuts',
            artist: 'MGK',
            url: 'https://musicfeed.ir/files/dir/2021/8/Machine%20Gun%20Kelly%20papercuts.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO44TgnC-large.jpg'
        },
        {
            name: 'You should be sad',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/04%20You%20should%20be%20sad.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: 'Graveyard',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/03%20Graveyard.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: 'Forever ... (is a long time)',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/05%20Forever%20...%20%28is%20a%20long%20time%29.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: 'Without Me',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/09%20Without%20Me.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: 'Still Learning',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/15%20Still%20Learning.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: '3am',
            artist: 'Halsey',
            url: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/08%203am.mp3',
            cover: 'https://dl.beelody.com/Free/2020/1/Halsey%20-%20Manic%20%282020%29%20MELOVAZ.NET/Cover.jpg'
        },
        {
            name: 'Perfect Places',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/02%20Perfect%20Places.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
        },
        {
            name: 'Green Light',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/04%20Green%20Light.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
        },
        {
            name: 'Supercut',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/06%20Supercut.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
        },
        {
            name: 'Team',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/08%20Team.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
        },
        {
            name: 'Liability',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/11%20Liability.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
        },
        {
            name: '400 Lux',
            artist: 'LORDE',
            url: 'https://dl.beelody.com/Free/2020/1/This%20Is%20Lorde%20%282020%29%20MELOVAZ.NET/13%20400%20Lux.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336'
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