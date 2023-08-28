frontModal = document.querySelector('.modal') ;

backModal = document.querySelector('backModal')

overlay = document.querySelector('.overlay');

cross = document.querySelector('.close-modal');

click = document.querySelector('.click');

click.addEventListener('click',() =>{
    frontModal.classList.toggle('modaljs')
    overlay.classList.toggle('hidden')        
})
cross.addEventListener('click',() =>{
    frontModal.classList.toggle('modaljs')
    overlay.classList.toggle('hidden')        
    // backModal.classList.toggle('backModaljs')
})