var upper=document.querySelector(".upper")
var box=document.querySelector(".box")
var button=document.getElementById("popup")

button.addEventListener("click",function(event){
    event.preventDefault()
    upper.style.display="block"
    box.style.display="block"
})
var container=document.querySelector(".container")
var send=document.getElementById("send")
var request=document.getElementById("requesting")
var service=document.getElementById("service")
var subject=document.getElementById("Subject")

send.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","offer-container")
    div.innerHTML=`<h3>${request.value}</h3>
    <h4>${service.value}</h4>
    <p>${subject.value}</p>
    <button>Delete</button>`
    container.append(div)
    upper.style.display="none"
    box.style.display="none"
})
