const wardrobe ={
    Trousers:["black jeans", "white pants", "white palazo", "brown pants"],
    Tops  :["Red long sleeve", "green blackless", "white tank top", "white top"],
    Dresses :["Red long", "pink dress", "white cherry,"],
    Sweaters :["Pink light", "grey heavy", "white cotton"],
    WinterJackets :["white big", "marron", "long brown"]
};



// clikable buttons
function mywardrobe() {
    const buttons= document.getElementsByClassName("category"); 
    console.log(buttons);

//making all the butttons clickable and adding an event to them
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonclickable);
    }

}

// adds event to the buttons onece u click the buttons u see the tops, trousers and stuff
function buttonclickable(event){
console.log(event.target.textContent);
const clothes = document.getElementById("clothes");
clothes.textContent = event.target.textContent;

// get the contents in each category
const category = event.target.textContent;
const clothesForCategory = wardrobe[category];

// once you click the trousers part you get the content in trousers
console.log(clothesForCategory); 

}


uploadButton.addEventListener("click", function()){
    const photoInput = document.getElementById("photoInput")
    const uploadPhoto =document.getElementById("uploadPhoto")

};
mywardrobe();


