const toggleNavButton = document.querySelector('.toggle-btn');
const toggleNav = document.querySelector('.toggle-nav');
const toggleCloseBtn = document.querySelector('.toggle-close');

toggleNavButton.addEventListener('click', function(){
    toggleNav.classList.toggle('active');
});
toggleCloseBtn.addEventListener('click', function(){
    toggleNav.classList.remove('active');
})

