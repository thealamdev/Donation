/**
 * Banner part
 */
let bannerItem = document.querySelectorAll('.banner-item img');
let buttonClass = document.querySelector('.buttonClass');

bannerItem.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
});

let count = 0;
let len = bannerItem.length;
buttonClass.addEventListener('click', function () {
    count++;
    if (count >= len) {
        count = 0;
    }
    slide(count);
});

function slide(count) {
    bannerItem.forEach((element, index) => {
        element.style.transform = `translateX(-${count * 100}%)`;
    })
}