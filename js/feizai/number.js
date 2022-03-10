num.addEventListener('mouseleave',function(){
    console.log(num);
for (var i = 0; i <= num.value; i++) {
    var newDiv = firstDiv.cloneNode(true);
    printPaper.appendChild(newDiv);
}
})