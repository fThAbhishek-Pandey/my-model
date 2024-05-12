// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const model_btn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const close_btn = document.querySelector(".close-btn");
model_btn.addEventListener('click',function(){
       
       overlay.classList.add('open-modal');
});
close_btn.addEventListener('click',function(){
    overlay.classList.remove('open-modal');
});