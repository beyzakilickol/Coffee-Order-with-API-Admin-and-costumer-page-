let orderContainer = document.getElementById("order-container")
let filterEmails = document.getElementById("filter-emails")
let searchButton = document.getElementById("search-button")


const ORDER_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

fetch(ORDER_URL).then(function(data){
    return data.json()
}).then(function(ordersObj){
  console.log(ordersObj)
let count = 1
    for(var orderKey in ordersObj){

        let orderDiv = `
        <tr>
          <th scope="row">${count}<button id=${count}>Delete</button></th>
          <td>${ordersObj[orderKey].emailAddress} </td>
          <td>${ordersObj[orderKey].coffee}</td>
          <td>${ordersObj[orderKey].size}</td>
          <td>${ordersObj[orderKey].flavor}</td>
          <td>${ordersObj[orderKey].strength}</td>
        </tr>
        `

        orderContainer.insertAdjacentHTML("beforeend", orderDiv)

        let delButton = document.getElementById(count)

        delButton.addEventListener("click", function(){

          const FILTERED_URL = ORDER_URL + this.parentElement.parentElement.children[1].innerHTML
          fetch(FILTERED_URL, {method: "DELETE"})
          remove(this)
        })
        count++
}
})

//-----------------------------------------------------------------
searchButton.addEventListener("click",function(){
  orderContainer.innerHTML = ""
  let email = filterEmails.value
  const FILTERED_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/" + email
fetch(FILTERED_URL).then(function(data){
  return data.json()
}).then(function(emailsObj){

  let filteredOrder = `
  <tr>
    <th scope="row">1<button id="remove">Delete</button></th>
    <td>${emailsObj.emailAddress} </td>
    <td>${emailsObj.coffee}</td>
    <td>${emailsObj.size}</td>
    <td>${emailsObj.flavor}</td>
    <td>${emailsObj.strength}</td>
  </tr> `

  orderContainer.insertAdjacentHTML("beforeend", filteredOrder)
let removeOrder = document.getElementById('remove')
removeOrder.addEventListener("click", function(){
  remove(this)
  fetch(FILTERED_URL, {method: "DELETE"})
})
})

})

//------------------------------------------------------
function remove(element){
  orderContainer.removeChild(element.parentElement.parentElement)
  }
