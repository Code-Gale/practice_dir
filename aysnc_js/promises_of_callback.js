const getData = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        resolve(request.responseText);
      } else if (request.readyState === 4) {
        reject("Could not fetch data");
      }
    });
    request.open("GET", "https://dummyjson.com/products/");
    request.send();
  });
};
console.log(1);
console.log(2);
getData()
  .then((data) => {
    console.log("callback fired");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log(1);
console.log(2);
