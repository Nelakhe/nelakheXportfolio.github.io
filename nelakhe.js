const button1 = document.getElementById("toggleButton")
let a;

let closeText = "view technologies"
function view(){
    button1.style.backgroundColor = "red";
    button1.style.color = "gold";
    button1.style.borderRadius = "10px";
 
    if(a!==1){
        document.getElementById("hidden").style.display="none";
        button1.textContent = " view technologies";
        return a=1;
    }
    else{
        document.getElementById("hidden").style.display="inline";
        button1.textContent = " hide technologies";
        return a=0;
    }

}

toggleButton.addEventListener(view(),function(){
    let isToggled = false; 
    
    if(isToggled){
        button1.textContent = "hide technologies";
    }else{
        button1.textContent = "view technologies"
        

    }
    isToggled = !isToggled;
})

