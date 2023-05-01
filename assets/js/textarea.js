const BODY=document.body;
const MAIN=document.createElement("main");
const SECTION=document.createElement("section");


const KEYBOARD__SECTION=document.createElement("section");
KEYBOARD__SECTION.classList.add("keyboard");


BODY.append(MAIN);

// const virtKey=[
//     39, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 08,
//     9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 13,
//     20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220,
//     16, 226, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38,
//     17, 91, 18, 32, 18, 92, 17, 37, 40, 39,
    
// ];

const test=[];

// document.onkeydown=function(event){
//     test.push(event.keyCode)
//     // console.log(event)
//     // console.log(event.keyCode)
//     console.log(test)
// }

const virtKey=[
    "`","1","2","3","4","5","6","7","8","9","0","-","=","backspace",
    "Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","'\'","DEL",
    "Caps Lock","A","S","D","F","G","H","J","K","L",";","'","ENTER",
    "Shift ","?","Z","X","C","V","B","N","M",",",".","/","||","Shift",
    "Ctrl","Win","Alt","space","Alt","Ctrl","<=","||","=>",
]

// create textarea inside section tag
document.addEventListener('DOMContentLoaded',()=>{
    
    const textarea=document.createElement('textarea');
    textarea.classList.add("textarea__style", "keyboard__print");

    // create and style section tag
    SECTION.classList.add("textarea__section");
    SECTION.append(textarea);

    MAIN.append(SECTION,KEYBOARD__SECTION);
    // let keyElement
    
    // creating keyboard
    /////////////////////////////////////////
    let btn
    
    virtKey.forEach(key=>{


        keyElement = document.createElement("button");
        keyElement.setAttribute("type","button");

        keyElement.classList.add("keyboard__key");

        const brakePoint=["backspace","DEL","ENTER", "Shift","=>"].indexOf(key) !==-1;

        keyElement.append(key);
        KEYBOARD__SECTION.append(keyElement);

        switch(key){

            case "backspace": 
                keyElement.classList.remove("keyboard__key")
                keyElement.classList.add("special__key--backspace", "special");
                // keyElement.innerHTML= createIconHTML("backspace");

                keyElement.addEventListener("click", ()=>{
                    });

                break;

            case "Caps Lock": 
                keyElement.classList.remove("keyboard__key")
                keyElement.classList.add("special__key--capslock", "keyboard__key--capslock-off", "special");
                // keyElement.innerHTML= createIconHTML("Caps Lock");

                keyElement.addEventListener("click", ()=>{
                keyElement.classList.toggle("keyboard__key--capslock-on");
                    });
                break;

            case "ENTER": 
                keyElement.classList.remove("keyboard__key")
                keyElement.classList.add("special__key--enter", "special");
                // keyElement.innerHTML= createIconHTML("ENTER");

                keyElement.addEventListener("click", ()=>{
                // this.properties.value += "\n"; // \n - appending linebreak;
                    });

                break;
                    
            case "space":
                keyElement.classList.add("special__key--space", "special");
                keyElement.classList.remove("keyboard__key")

                    keyElement.addEventListener("click", ()=>{
                        keyElement.value += " ";
                    });

                break;

            case "DEL": 
                keyElement.classList.add("special__key--del", "special");
                keyElement.classList.remove("keyboard__key")
                // keyElement.innerHTML= createIconHTML("DEL");

                keyElement.addEventListener("click", ()=>{
                    // this.properties.value+=" ";
                    });

                break;

            case "Shift ": 
                keyElement.classList.add("special__key--left-shift", "special");
                keyElement.classList.remove("keyboard__key")
                // keyElement.innerHTML= createIconHTML("Shift");

                keyElement.addEventListener("click", ()=>{
                    // this.properties.value +=  " ";
                    });

                break;
            
            case "Shift": 
                keyElement.classList.add("special__key--shift-right", "special");
                keyElement.classList.remove("keyboard__key")
                // keyElement.innerHTML= createIconHTML("Shift");

                keyElement.addEventListener("click", ()=>{
                    // this.properties.value +=  " ";
                    });

                break;
            
            case "Ctrl": 
                keyElement.classList.add("special__key--ctrl", "special");
                keyElement.classList.remove("keyboard__key")
                // keyElement.innerHTML= createIconHTML("Ctrl");

                keyElement.addEventListener("click", ()=>{
                    key.value +=  " ";
                    });

                break;
        
        }

        if(brakePoint){
            KEYBOARD__SECTION.appendChild(document.createElement("br"))
        }

        btn=document.querySelectorAll("keyboard__key");

    });

})





