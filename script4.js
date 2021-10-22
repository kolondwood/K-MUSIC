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
            name: 'Lust For Life',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/13%20Lust%20For%20Life.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'West Coast',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/14%20West%20Coast.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Dark Paradise',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/15%20Dark%20Paradise.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Cherry',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/16%20Cherry.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Brooklyn Baby',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/17%20Brooklyn%20Baby.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Ultraviolence',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/20%20Ultraviolence.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
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