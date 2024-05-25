const btnLike1 = document.getElementById("btnlike1")
const countLike1 = document.getElementById("countLiked")

function clickLiked(){
     let totalLikes = parseInt(countLike1.value) + 1
     countLike1.textContent = totallikes.toString()
}
btnLike1.addEventListener("click",clickLike1)
