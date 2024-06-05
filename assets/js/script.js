/**
 * Banner part
 */
let bannerItem = document.querySelectorAll('.banner-item img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

bannerItem.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
});

let count = 0;
let len = bannerItem.length;
next.addEventListener('click', function () {
    count++;
    if (count >= len) {
        count = 0;
    }
    slide(count);
});
prev.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = len - 1;
    }
    slide(count);
});

function slide(count) {
    bannerItem.forEach((element, index) => {
        element.style.transform = `translateX(-${count * 100}%)`;
    })
}