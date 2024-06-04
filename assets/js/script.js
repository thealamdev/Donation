/**
 * Banner part
 */
let bannerItem = document.querySelectorAll('.banner-item img');
let buttonClass = document.querySelector('.buttonClass');
bannerItem.forEach((element, index) => {
    console.log(element[1])
});

var count = -1;
buttonClass.addEventListener('click', function () {
    count++;
    if (count >= len) {
        count = 0;
    }
    play(count);
});

let len = bannerItem.length;

function play(count) {
    for (let i = 0; i < len; i++) {
        bannerItem[count].style.zIndex = '100';
        bannerItem[count].style.transition = '0.5s'
        
        // let otherItem = 
    }
}