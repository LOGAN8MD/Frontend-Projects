let show_all = document.querySelector('#show_all_btn');
let show_app = document.querySelector('#apps_btn');
let show_ecom = document.querySelector('#ecom_btn');


let ecommerce = document.querySelectorAll('.ecommerce')
let apps = document.querySelectorAll('.apps');

show_ecom.addEventListener('click', (e) => {
    apps.forEach(e => {
        e.style.display = 'none';
    })



    ecommerce.forEach(e => {
        e.style.display = 'block';
    })


    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_all.style.backgroundColor = 'white';
    show_all.style.color = 'black';
    show_app.style.backgroundColor = 'white';
    show_app.style.color = 'black';
});

show_app.addEventListener('click', (e) => {
    ecommerce.forEach(e => {
        e.style.display = 'none';
    })



    apps.forEach(e => {
        e.style.display = 'block';
    })
    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_all.style.backgroundColor = 'white';
    show_all.style.color = 'black';
    show_ecom.style.backgroundColor = 'white';
    show_ecom.style.color = 'black';

});

show_all.addEventListener('click', (e) => {
    ecommerce.forEach(e => {
        e.style.display = 'block';
    })


    apps.forEach(e => {
        e.style.display = 'block';
    })
    e.target.style.backgroundColor = 'darkgrey';
    e.target.style.color = 'white';
    show_app.style.backgroundColor = 'white';
    show_app.style.color = 'black';
    show_ecom.style.backgroundColor = 'white';
    show_ecom.style.color = 'black';


});


//_____________________________________________________sliding_img

let item_1 = document.querySelector('.sliding_background_img');
let sliding_img_div = document.querySelector('.sliding_img_div');
let sliding_img = document.getElementById('sliding_img');
let sliding_circle = document.querySelector('.slider_circle');




item_1.addEventListener('mousemove', (e) => {
    let width = e.pageX
    console.log(width);
    let x = width - 111;


    if (x < 0) {
        sliding_circle.style.left = "3%";
    }
    if (x > 0 & x < 420) {
        sliding_circle.style.left = `${x + 14}px`;
        sliding_img_div.style.clip = `rect(0px ${x}px 1000px 0px)`;

    }

    if (x > 400) {
        sliding_circle.style.right = "4%";
    }


})


// let magnifier = document.querySelector('.img_magnifier')
let magnified_img = document.querySelector('#zoomed_image_magnified');
let item_2 = document.querySelector('#item_image_2');
item_2.addEventListener('mousemove', (e) => {
    let x = e.offsetX ;
    let y = e.offsetY;
    // magnifier.style.top = `${y}px`;
    // magnifier.style.left = `${x}px`;
    // magnifier.style.cursor = 'none';
    console.log("x=",x);
    console.log(y);
    if(x>15 && y>15 && x<260 && y<170)  {
    magnified_img.style.clipPath = `circle(15% at ${x}px  ${y}px)`;

    }
   


})

function myFunction() {
    let x = document.querySelector(".header__nav_links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }





//   if(e.target.style.backGround.color==='white')


let img1 = document.getElementById('alice1');
let img2 = document.getElementById('alice2');
let img3 = document.getElementById('alice3');

let aliceTumbling = [
    {
        transform: 'rotate(0) scale(3)'
    },
    {
        transform: 'rotate(360deg) scale(1)'
    }
]

let aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}


async function rotateImage() {

    await img1.animate(aliceTumbling, aliceTiming).finished;
    await img2.animate(aliceTumbling, aliceTiming).finished;
    await img3.animate(aliceTumbling, aliceTiming)
  
}


