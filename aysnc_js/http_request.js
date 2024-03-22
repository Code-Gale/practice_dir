const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status == 200){
    console.log(request, request.responseText)
  }else if (request.readyState === 4){
    console.log("Couldn't fetch data")
  }
})

request.open('GET', 'https://dummyjson.com/products/')
request.send();