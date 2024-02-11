let screen=document.getElementById("id1");
let btn=document.querySelectorAll(".cp");

for(let x of btn ){
    x.addEventListener('click',(e)=>{
        //document.write(e.target.innerText);

        if(e.target.innerText== '='){

            console.log(eval(screen.value));

            screen.value=eval(screen.value);
        }
        else if(e.target.innerText== 'c'){
            screen.value="";
        }
        else{
            screen.value= screen.value+e.target.innerText;
        }
    })
}