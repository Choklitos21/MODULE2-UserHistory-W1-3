//Change text content
const myButton = document.getElementById('changeText')
myButton.addEventListener('click', () => {
    const text = document.getElementById('myText');

    text.textContent = 'This text has been changed, are you Ok?';
})

//Welcome message
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onload = function() {
    setTimeout(function(){
        document.getElementById("myModal").style.display = "block";
    }, 1);
};
