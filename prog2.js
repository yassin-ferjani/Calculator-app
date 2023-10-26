

const buttons = document.getElementsByTagName("input");
 let result=document.getElementById('result');
 let resultp=result.innerHTML;
 let equation=document.getElementById('equation').innerHTML;
 let equationp=equation.innerHTML;
 let array1=result;
 let array2=equation;
for (let i = 0; i < buttons.length; i++) {

 /*console.log('result: ',result);
 console.log('equation: ',equation);
 console.log('array1: ',array1);
 console.log('array2: ',array2);*/
    
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
                console.log(buttonValue);
                if(resultp =='0'){
                resultp=buttonValue;
                console.log('101....resultp: ',resultp);
                }else{
                resultp+=buttonValue;
                console.log('102....resultp: ',resultp);
                }
                break;
            case 'C':
               resultp='';
               console.log(buttonValue);
                
                equationp='';
                break; 
            
            case '+':
            case '-':
            case '/':
            case '*':
                    console.log(buttonValue);
                    if(equationp==''){
                       equationp=resultp+buttonValue;
                        resultp='';
                        console.log(1);
        
                    }else if(result=='' && equation !='' ){
                         let myArray= equationp.split('');
                         myArray[myArray.length-1]=buttonValue;
                         equationp=myArray.join('');
                         console.log(2);
                    }else{
                        equationp+=result+buttonValue;
                        resultp='';
                        console.log(3);
                    }
                   
                    break;

                
            case '+/-':
                    console.log(buttonValue);
                    console.log('array1: ',array1);
                    console.log('array2: ',array2);
                    if( array2[0]=='-' && result==null ){
                        array2.shift();
                        equationp=array2.join('');
                    }else{
                        array2.unshift('-');
                        equationp=array2.join('');
                    } 
                    if(resultp !=null && array1[0]=='-'){
                        array1.shift();
                        resultp=array1.join('');
                    }else{
                        array1.unshift('-');
                        resultp=array1.join('');
                    }
                    break;
                 
            case '=':
                    console.log(buttonValue);
                        let clicks=null;
                       let operators=['+','-','/','*'];
                    if(clicks==null && resultp!=null && resultp!='0' && !(operators.includes(array1[array1.length-1]))){
                        equation+=result;
                    }else if(clicks==null && resultp!=null && resultp!='0' && !(operators.includes(array1[array1.length-1]))){
                        array1.pop();
                        resultp=array1;
                        equationp+=resultp;
                    }
                  
        }
        result.innerHTML = resultp;
        equation.innerHTML = equationp;
        })}