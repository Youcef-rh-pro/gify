  const images= document.getElementById('images')
  const catBtn=document.getElementById('form')
  catBtn.addEventListener('click',(e)=>{
  images.innerHTML=''
  e.preventDefault()
 const img = document.createElement('img');
 const search=document.getElementById('search').value
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0V5EjxV7zAjuxvk8vX2qYwT2vSoCqhGo&s=${search}`, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if(response.data.constructor===Array){
          images.innerHTML='no result'

        }else{
          img.src=response.data.images.original.url

        }
      })
      .catch(error=>{
        images.innerHTML='mistake happend'
      }
      );
     images.append(img)
})