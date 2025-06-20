const priceList = document.getElementById('priceList');
const backButton = document.querySelector('.back-button');
const shopButton = document.querySelector('.shop-button');
const toggleButton = document.querySelector('.toggle-button');

backButton.addEventListener('click', function() {
    window.history.back();
});

shopButton.addEventListener('click', function() {
    window.open('https://dissolutepup.com');
});

toggleButton.addEventListener('click', function() {
    priceList.style.display = 'block';
});

function hidePriceList() {
    priceList.style.display = 'none';
}