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
            name: 'Bad Romance',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/01%20Bad%20Romance.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'Born This Way',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/03%20Born%20This%20Way.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'Poker Face',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/04%20Poker%20Face.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'Alejandro',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/06%20Alejandro.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'Just Dance',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/09%20Just%20Dance.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'Million Reasons',
            artist: 'Lady Gaga',
            url: 'https://dl.beelody.com/Free/2018/7/This%20Is%20Lady%20Gaga%20%282018%29%20MELOVAZ.COM/14%20Million%20Reasons.mp3',
            cover: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0XhJtu-large.jpg'
        },
        {
            name: 'hope is a dangerous thing',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/01%20hope%20is%20a%20dangerous%20thing%20for%20a%20woman%20like%20me%20to%20have%20-%20but%20I%20have%20it.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Blue Jeans',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/02%20Blue%20Jeans.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Young And Beautiful',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/03%20Young%20And%20Beautiful.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Born To Die',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/04%20Born%20To%20Die.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Summertime Sadness',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/05%20Summertime%20Sadness.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Video Games',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/06%20Video%20Games.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Venice Bitch',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/07%20Venice%20Bitch.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Ride',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/08%20Ride.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'National Anthem',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/09%20National%20Anthem.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Love',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/10%20Love.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'High By The Beach',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/11%20High%20By%20The%20Beach.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/BornToDieAlbumCover.png/220px-BornToDieAlbumCover.png'
        },
        {
            name: 'Mariners Apartment Complex',
            artist: 'Lana Del Rey',
            url: 'https://dl.beelody.com/Free/2019/2/This%20Is%20Lana%20Del%20Rey%20%282019%29%20MELOVAZ.NET/12%20Mariners%20Apartment%20Complex.mp3',
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