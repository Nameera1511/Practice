
let images = document.querySelectorAll('.images');
let main_container = document.getElementById("main-container")
let container = document.getElementById('preview-container');
let black = document.getElementById('theme-black')
let heart = document.querySelectorAll('.fa-solid.fa-heart')

black.addEventListener('click', () => {
    main_container.classList.toggle('theme-black')
})

images.forEach(btn => {

    btn.addEventListener('click', () => {

        images.forEach(b => {
            b.classList.remove('big-image')
        })
        // Clear previous preview
        container.innerHTML = '';

        // Create a new div
        let div = document.createElement('div');
        div.classList.add('preview');

        // Create a new image
        let img = document.createElement('img');
        img.src = btn.getAttribute('src')
        img.classList.add('big-image');

        // Add image to div and div to container
        div.appendChild(img);
        container.appendChild(div);
    });
    
});
// toggle heart icon
 heart.forEach(h => {

        h.addEventListener ('click', () => {

                h.classList.toggle('heart_button')
          

            })
    })


















