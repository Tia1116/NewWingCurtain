var that;
class Tab{
    constructor(id){
        that=this;
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections =this.main.querySelectorAll('section');

        this.init();

    }
    init(){
        //connect element to functions
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;//点击以后触发，所以不加括号
        }

    }

    toggleTab(){
        that.clearClass();
        this.className='liactive';
        that.sections[this.index].className='conactive';

    }
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            that.sections[i].className='';
        }
    }
    
    
}

new Tab('#tab');