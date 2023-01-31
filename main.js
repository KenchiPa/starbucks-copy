console.log('KENCHI');

const els = document.querySelectorAll('div')

console.log('els', els)

els.forEach(el => {
    console.log(el.dataset.fruitName)
})