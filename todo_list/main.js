let display = document.getElementById("display")
let add_button = document.getElementById("add_item")
let list_items = document.getElementById("list_item")


add_button.addEventListener('click', () => {
    let tasktext = display
    if (tasktext) {
        let list = document.createElement('li')
        list.textContent = display.value
        list_items.appendChild(list)
        display.value = ""
        list.classList.add("list")
        let deletbutton = document.createElement('button')
        deletbutton.textContent = "Delete"

        deletbutton.addEventListener('click', () => {
            list_items.removeChild(list)

        })
        list.addEventListener('click', () => {
            list.classList.toggle('complete')
        })

        deletbutton.classList.add('deletebutton')
        list.appendChild(deletbutton)
    }
})
