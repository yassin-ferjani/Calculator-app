/*const buttons = document.getElementsByClassName("num");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const buttonValue = this.value;
        if(document.getElementById("result").innerHTML ==0){
        document.getElementById("result").innerHTML=buttonValue;
        }else{
            document.getElementById("result").innerHTML+=buttonValue;
        }
});
}

const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        const operatorValue = this.value;
        if(document.getElementById("equation").innerHTML ==""){
        document.getElementById("equation").innerHTML=operatorValue;
        }else{
            document.getElementById("equation").innerHTML+=operatorValue;
        }
});
}


const erasor=document.getElementById("erase");
erasor.addEventListener('click',function(){
    const result=getElementById('result');
    result.innerHTML='0';
    getElementById('equation').innerHTML='';
});*/

const buttons = document.getElementsByTagName("input");
let result=document.getElementById('result').innerHTML;
let equation=document.getElementById('equation').innerHTML;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const buttonValue = this.value;
        switch (buttonValue){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if(document.getElementById("result").innerHTML =='0'){
               document.getElementById("result").innerHTML=buttonValue;
                }else{
                document.getElementById("result").innerHTML+=buttonValue;
                }
                break;
            case 'C':
                document.getElementById('result').innerHTML='';
                
                document.getElementById('equation').innerHTML='';
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                 
            if(document.getElementById('equation').innerHTML==''){
                document.getElementById('equation').innerHTML=document.getElementById('result').innerHTML+buttonValue;
                document.getElementById('result').innerHTML='';

            }else if(document.getElementById('result').innerHTML=='' && document.getElementById('equation').innerHTML !== null ){
                 let myArray= document.getElementById('equation').innerHTML.split('');
                 myArray[myArray.length-1]=buttonValue;
                 document.getElementById('equation').innerHTML=myArray.join('');
                 
            }
            
            else{
                document.getElementById('equation').innerHTML+=document.getElementById('result').innerHTML+buttonValue;
                document.getElementById('result').innerHTML='';
            }
                break;
            
        
            case '+/-':
                let array1=document.getElementById('result').innerHTML;
                let array2=document.getElementById('equation').innerHTML;
                console.log('array1: ',array1);
                console.log('array2: ',array2);
                if(array1.length!==0 && array1[0]!=='-'){
                    array1.unshift('-');
                    console.log(5);
                    document.getElementById('result').innerHTML=array1.join('');
                }else if(array1.lenght===null && array2.lenght!==null && array2[0]!=='-'){
                    array2.unshift('-')
                    document.getElementById('equation').innerHTML=array2.join('');
                    console.log(6);
                }
                /*let myArray= document.getElementById('equation').innerHTML.split('');
                let myArrayy=document.getElementById('result').innerHTML.split('');
                console.log('myArray: ' ,myArray);
                console.log('myArrayy: ', myArrayy);
                if(myArray.length==0 ){
                    myArrayy.unshift('-');
                    document.getElementById('result').innerHTML=myArray.join('');
                    console.log(1);
                }
                else if(myArray[0]=='-'){
                    myArray.shift();
                    document.getElementById('equation').innerHTML=myArray.join('');
                    console.log(2);
                }
                break;*/
               


            case '=':
                let clicks=0;
                if(document.getElementById('result').innerHTML!='' && clicks==0){
                    
                    clicks++;
                    document.getElementById('equation').innerHTML+=document.getElementById('result').innerHTML;
                    document.getElementById('result').innerHTML='';
                function MATH(){
                let math='';
                let result;
                let myArray2= document.getElementById('equation').innerHTML.split('');
                console.log(myArray2);
                console.log('myArray2 lenght:',myArray2.length);
                /*if(myArray2[myArray2.lenght-1]!=['1','2','3','4','5','6','7','8','9','0']){
                    myArray2.pop();
                    console.log(myArray2)
                }*/
                while (myArray2.length > 0) {
                    math += myArray2.shift();
                    console.log(myArray2)
                }
                console.log(math);
                result=eval(math);
                document.getElementById('result').innerHTML=result;
                }
                MATH();
                }else if(clicks==0){
                clicks++;
                Math();
                }else{
                    break;
                }
                console.log(clicks);
                break;
            
            //case '%': i need to find a clean implimentation for it...ill get back to it evnetually :)
                 
}
    })

}


