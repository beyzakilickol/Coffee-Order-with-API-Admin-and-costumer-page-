let submit = document.getElementById("submit")
let emailTextBox = document.getElementById("emailTextBox")
let coffeeTypes = document.getElementById("coffeeTypes")
let flavorTypes = document.getElementById("flavorTypes")
let coffeeSize = document.getElementById("coffeeSize")
let coffeeStrength = document.getElementById("coffeeStrength")

const URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

submit.addEventListener("click", function(){

let submitObj = {
emailAddress: emailTextBox.value,
coffee: coffeeTypes.value,
strength: coffeeStrength.value,
size: coffeeSize.value,
flavor: flavorTypes.value
}
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( // converting object to string
      submitObj
    )

  })
//-----------------------------
 })
