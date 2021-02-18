const allImagesDiv= document.getElementById("all-images");
const mainImage = document.getElementById("current");

const images= [
    {
        id: 1,
        src: "assets/casa1.png",
        caption: "VEGAN POTATO STEW",
        sub: "Spicy original Casa DeSakuragi recipe with kimchi."
    }, {
        id: 2,
        src: "assets/casa2.png",
        caption: "JAPANESE BREAKFAST",
        sub: "Traditional rice, salmon and cozy home-made miso soup."
    },
    {
        id: 3,
        src:"assets/casa3.png",
        caption: "PIERRE HERMÉ MACARONS",
        sub: "Exotic combinations of France's finest dessert."
    },
    {
        id: 4,
        src: "assets/casa4.png",
        caption: "SOUTH ASIAN GULAB JAMUN",
        sub: "Sweet cardamom desert for rainy days."
    },
    {
        id: 5,
        src: "assets/casa5.png",
        caption: "BREAKFAST FOR TWO",
        sub: "Romantic breakfast date with our speicalty latte."
    },
    {
        id: 6,
        src: "assets/casa6.png",
        caption: "SUMMER PLUM CRUMBLE",
        sub: "Glutten-free plum crumble with oat flour and spices."
     }
];

for (image of images) {
    //divs
    const mainDiv = document.createElement("div");
    allImagesDiv.appendChild(mainDiv);
    const bodyDiv = document.createElement("div");
    mainDiv.appendChild(bodyDiv);
    bodyDiv.style.padding="4px";
    //picture
    const picture = document.createElement("img");
    bodyDiv.appendChild(picture);
    picture.src = image.src;
    picture.setAttribute("width", "75px");
    picture.id="picture";
    picture.style.opacity="0.75";
    picture.style.transitionDuration="0.4s;"
    picture.addEventListener("mouseenter", ()=> {picture.style.opacity="1"});
    picture.addEventListener("mouseover", ()=> {picture.style.cursor="pointer"});
    picture.addEventListener("mouseout", ()=> {picture.style.opacity="0.75"});
    picture.addEventListener("click", (e)=> {picture.style.opacity="1";    
    mainImage.src = e.target.src});


}

