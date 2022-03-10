window.addEventListener("load",function(){
var sprintPaper = document.querySelector(".sprintPaper");
    var firstSheer = document.querySelector(".firstSheer")
    for (var i = 0; i <= 6; i++) {
        var newDiv = firstSheer.cloneNode(true);
        sprintPaper.appendChild(newDiv);
    }
    var optionalLis=sprintPaper.querySelectorAll("li")
    for(var i=0;i<=optionalLis.length;i++){
        optionalLis[i].addEventListener("click",function(){
            if(this.className=="picked"){
                this.className="";
            }else{
                this.className="picked";
            }
            
        })
    }
})