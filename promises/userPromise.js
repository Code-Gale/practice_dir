function signUpUser(firstName : string, lastName : string) {
  return Promise.resolve({firstName, lastName})
  
}


console.log(signUpUser("Bob", "Dylan"));