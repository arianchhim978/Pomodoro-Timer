let a = document.getElementById("blank2")
let b = document.getElementById("message")


b.addEventListener("click",function(){
    if (a.style.display === 'none'|| a.style.display === ''){
        a.style.display = "block"
    }else{
        a.style.display = 'none'
    }
})