// clikable buttons
function mywardrobe() {
    const buttons= document.getElementsByClassName("category"); 
    console.log(buttons);

//making all the butttons clickable and adding an event to them
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonclickable);
    }

}

// adds event to the buttons
function buttonclickable(event){
console.log(event.target);
}

mywardrobe();


