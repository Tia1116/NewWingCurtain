window.addEventListener("load",function(){
    var printPaper = document.querySelector('.printPaper')
     var firstDiv = document.querySelector(".firstCurtain")
     var cbt=document.querySelector("#cbt")
     var sbt=document.querySelector("#sbt")
     var reset=document.querySelector("#reset")
     var sprintPaper = document.querySelector(".sprintPaper");
     var printPaper = document.querySelector('.printPaper')
     var oDate=document.querySelector('.oDate')
    var etaDate=document.querySelector('.etaDate')
    var soDate=document.querySelector('.soDate')
    var setaDate=document.querySelector('.setaDate')
    var firstSheer = document.querySelector(".firstSheer")





    cbt.addEventListener('click',function(){
        printPaper.style.display='block';
        sprintPaper.style.display='none';
    })
    sbt.addEventListener('click',function(){
        sprintPaper.style.display='block';
        printPaper.style.display='none';
    })
    var date = new Date();
    var year = date.getFullYear(); //获取年
    var month = date.getMonth() + 1; //月份返回值会小1，所以要+1
    var dat = date.getDate(); //获取日


    
    oDate.value=dat+'/'+month+'/'+year;

    
    var edate=new Date();
    edate.setDate(edate.getDate()+28);
    var y = edate.getFullYear(); //获取年
    var m= edate.getMonth() + 1; //月份返回值会小1，所以要+1
    var d = edate.getDate(); //获取日

    etaDate.value=d+'/'+m+'/'+y

    soDate.value=oDate.value;
    setaDate.value=etaDate.value;

    
    
 })