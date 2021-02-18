const aboutPictures = ["assets/tea.png","assets/sakura.JPG","assets/georgian.JPG","assets/fuji.jpg","assets/about-us.JPG"]
const aboutUsPic = document.getElementById("about-us");

const changePics = () => {
   for (let i = 0; i<aboutPictures.length; i++) {
       let nextPic = aboutPictures[i+1]
      console.log(nextPic);
   } 
}

aboutUsPic.addEventListener("click", changePics);