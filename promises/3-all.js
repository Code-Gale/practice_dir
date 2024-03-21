export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}



export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

function handleProfileSignup(){
  const promises = [uploadPhoto(), createUser()]
  //console.log(promises)
  Promise.all(promises)
    .then((promises) => {
    console.log(`${promises[0].body} ${promises[1].firstName} ${promises[1].lastName}`)
  })
  
  
}


handleProfileSignup()