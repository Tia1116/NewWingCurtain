   window.addEventListener("load",function(){
   var printPaper = document.querySelector('.printPaper')
   var firstDiv = document.querySelector(".firstCurtain")
   var num=document.querySelector('#num');
   var totalNum=document.querySelector('#totalNum')
   var invoicNum=document.querySelector('#invoiceNo')
    
   totalNum.addEventListener('mouseout',function(){

    for (var i = 2; i <= totalNum.value; i++) {
        num.value=i;
        var newDiv = firstDiv.cloneNode(true);
        printPaper.appendChild(newDiv);
    }
   })
   var invoicNumList=invoicNum;

    invoicNum.addEventListener('keyup',function(){
        if (event.keyCode==13){
            invoicNumList.value=3333
        }
    
    })

    var optionalLis=printPaper.querySelectorAll("li")
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