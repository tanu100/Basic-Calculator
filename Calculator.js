var Display = document.getElementById("Display");
var Buttons=document.querySelectorAll('button');

let buttonsArray=Array.from(Buttons);
var string="";
buttonsArray.forEach(btn => {
    btn.addEventListener('click',function(e){
        if(e.target.innerHTML=='='){
            string=eval(string);
            Display.value=string;
        }else if(e.target.innerHTML=='C'){
            string="";
            Display.value=string;
        }else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            Display.value=string;
        }else if(e.target.innerHTML=='x'){
            string+='*';
            Display.value+='x';
        }else if(e.target.innerHTML=='ABS'){
            if(string[0]=='-'){
                let end=string.length;
                string=string.slice(1,end);
                Display.value=string;
            }
        }else{
            string += e.target.innerHTML;
            Display.value=string;
        }
    })
});