const div = document.getElementById('drop')
const button = document.getElementById('btn-drop')

button.addEventListener('click', () => {
    if(div.style.display === 'none') {
        div.style.display = 'block'
        console.log(".")
    } else {
        div.style.display = 'none'
    }
})