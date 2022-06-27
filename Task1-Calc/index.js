let sc = document.getElementById("screen");
bt = document.querySelectorAll('button');
let scvalue = '';
for(item of bt){
    item.addEventListener('click', function (e) { 
        btText = e.target.innerText;
        console.log('Button text is ', btText);
        // if we enter X, we should evaluate it as multiplication
        if(btText == 'X'){
            btText = "*";
            scvalue += btText;
            sc.value = scvalue;
        }
        // for clearing the screen
        else if(btText == "C"){
            scvalue = "";
            sc.value = scvalue;
        }
        // for getting result
        else if(btText == "="){
            try{
                sc.value = eval(scvalue);
            }
            // if we get error print invalid
            catch(e){
                sc.value = "Invaid!!";
            }
        }
        else{
            scvalue += btText;
            sc.value = scvalue;
        }
     })
}
