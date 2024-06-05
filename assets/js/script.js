/**
 * Banner Slider Part.
 */
let bannerItem = document.querySelectorAll('.banner-item img');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

bannerItem.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
});

var count = 0;
let len = bannerItem.length;
nextBtn.addEventListener('click', function () {
    next();
});

prevBtn.addEventListener('click', function () {
    prev()
});

function next() {
    count++;
    if (count >= len) {
        count = 0;
    }
    slide(count);
}

function prev() {
    count--;
    if (count < 0) {
        count = len - 1;
    }
    slide(count);
}

function slide(count) {
    bannerItem.forEach((element) => {
        element.style.transform = `translateX(-${count * 100}%)`;
    })
}

// setInterval(() => {
//     next();
// }, 5000)
