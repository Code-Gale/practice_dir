const getData = ((callback) => {
  const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
 if (request.readyState === 4 && request.status == 200){
   callback(undefined, request.responseText)
 }else if(request.readyState === 4){
   callback('Could not fetch data', undefined)
 }
})
request.open('GET', '`https://dummyjson.com/products/`')
request.send();
})
getData((err, data)=> {
  console.log('callback fired');
  if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})