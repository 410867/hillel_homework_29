const nameImg = [
    'smileImg_1.jpg',
    'smileImg_2.jpeg',
    'smileImg_3.jpg',
    'smileImg_4.jpg',
    'smileImg_5.jpg',
    'smileImg_1.jpg',
    'smileImg_2.jpeg',
    'smileImg_3.jpg',
];

const smileList = document.querySelector('.smile__list');
smileList.innerHTML = ``;

nameImg.forEach((item) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.src = `/img/${item}`;
    p.innerText = '0';

    div.classList.add('smile__item');
    div.append(img, p);
    smileList.append(div);
});

const smileImages = document.querySelectorAll('.smile__list .smile__item img');
let counterImages = new Array(smileImages.length);

smileImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(isNaN(counterImages[i])) {
            counterImages[i] = 0;
        }
        counterImages[i]++;
        renderResult(counterImages, i);
    });
});

function renderResult(counterImages, i) {
    const p = document.querySelectorAll('.smile__list .smile__item p');
    p[i].innerText = `${counterImages[i]}`;
}
