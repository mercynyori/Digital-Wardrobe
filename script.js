const wardrobe ={
    Trousers:["images/Trousers/black-jeans.jpg" , "images/Trousers/white pants.jpg", "images/Trousers/brown-pants.jpg"],
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
for (let i = 0; i < clothesForCategory.length; i++){
    // image of the trousers 
const image = document.createElement("img");
console.log(image);
image.src = clothesForCategory[i];
clothes.append(image)
}
}

// click the choose file and the file part in my laptop opens so i can choose an image
uploadButton.addEventListener("click", function(){
    const photoInput = document.getElementById("photoInput")
    photoInput.click()

});

// once i have clicked an image the js should understand that a CHANGE has happened becoause the input value has changed
photoInput.addEventListener("change", function(){
   const file = photoInput.files[0];
   // temporary story the images with url links
   const imageURL = URL.createObjectURL(file);

// create image
const image = document.createElement("img")
// get the source
image.src = imageURL
clothes.append(image)

});

mywardrobe();


