class String {

  stringLength(string){
    let counter = 0
    for(let character of string){
      counter++
    }
    if(string.length > 1 && string.length <= 10){
      return "This is working"
    }
    return "ERROR"
} 

  reverseString(str){
    return str.split("").reverse().join("")

  }

  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);  
  }
}
  const instance = new String

  module.exports = instance;
