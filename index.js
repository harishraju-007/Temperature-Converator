//radio
var ctof = document.getElementById('cTof');
var ftoc = document.getElementById('fToc');
var inputValue ;

inputValue = document.getElementById("inputValue");
var temp;



function calculate(){
    if(ctof.checked){
        temp = Number(inputValue.value);

        var fah = (temp*9/5)+32;
        document.getElementById('result').innerHTML=fah.toFixed(1)+"°F";   
    }
    else if(ftoc.checked){
        temp = Number(inputValue.value);
        
        var cel = (temp-32)*5/9;
        document.getElementById('result').innerHTML=cel.toFixed(1)+"°C";
    }
    else{
        document.getElementById('result').innerHTML="!!!select any one of the conversion!!!";
    }
}




