const images = document.getElementById("images");
const catBtn = document.getElementById("form");
catBtn.addEventListener("click", (e) => {
  images.innerHTML = "";
  e.preventDefault();
  const img = document.createElement("img");

  const search = document.getElementById("search").value;

  getCat(img,search);

  images.append(img);
});
async function getCat(img,search) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=0V5EjxV7zAjuxvk8vX2qYwT2vSoCqhGo&s=${search}`,
    { mode: "cors" }
  );

  const catData = await response.json();

  img.src = catData.data.images.original.url;

  // .then(function(response) {
  //   if(response.data.constructor===Array){
  //     images.innerHTML='no result'

  //   }else{
  //

  //   }
  // })
  // .catch(error=>{
  //   images.innerHTML='mistake happend'
  // }
  // );
}
