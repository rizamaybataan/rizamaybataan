const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countlike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clicklike1)

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)
