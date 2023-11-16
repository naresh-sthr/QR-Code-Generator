var url="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=";
let InputValue = document.getElementById('Inputin');
let imagesrc = document.getElementById('qr-image');

function generate() {
    imagesrc.src=url+InputValue.value;
}