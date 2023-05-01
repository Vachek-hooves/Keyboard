// first thing to do is to define an object. Object will be entire keyboard object inself.

const keyboard= {
    elements:{
        main: null, // will be main keyboard element.
        keysContainer:null, // for key container.
        keys:[], // is an array for the buttons of keys.
    },

    eventHandlers:{
        oninput:null,
        onclose:null,
    },

    properties:{
        value:"",
        capsLock: false,
    },

    init(){ // will run when page first loads up & initialized keyboard (it will make all elements).
        // create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        //setup main elements
        this.elements.main.classList.add("keyboard","1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keycap");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys= this.elements.keysContainer.querySelectorAll(".keyboard__key");

        //add at DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main); 

        // Print to be showed in textarea__print class.

        document.querySelectorAll("keyboard__print").forEach(element=>{
            element.addEventListener("focus", ()=>{
                this.open(element.value, currentValue =>{
                    element.value= currentValue;
                });
            });
        });

    },

    _createKeys(){ // code create keys & that's going to be a privet method. Underscore doesn't do anything but it's a naming convention to say this is a private methode and the create keys method is going to create all of HTML for each one of the keys.
        const fragment= document.createDocumentFragment()
        const keyLayout=[
            "`","1","2","3","4","5","6","7","8","9","0","-","=","backspase",
            "Tab","q","w","e","r","t","y","u","i","o","p","[","]","'\'","DEL",
            "Caps Lock","A","S","D","F","G","H","J","K","L",";","'","ENTER",
            "Shift ","?","Z","X","C","V","B","N","M",",",".","/","||","Shift",
            "Ctrl","Win","Alt","space","Alt","Ctrl","<=","||","=>",
        ];

        // create HTML for an icon
        const createIconHTML=(icon_name)=>{
            return `<span class="material-icons">${icon_name}</span>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak= ["backspace","DEL","ENTER", "Shist","=>"].indexOf(key) !==-1;

            //add attributes/classes
            keyElement.setAttribute("type","button");
            keyElement.classList.add("keyboard__key");

            switch(key){
                case "backspase": 
                    keyElement.classList.add("special__key--backspace");
                    keyElement.innerHTML= createIconHTML("backspace");

                    keyElement.addEventListener("click", ()=>{
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length-1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Tab": 
                    keyElement.classList.add("special__key");
                    keyElement.innerHTML= createIconHTML("Tab");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "Caps Lock": 
                    keyElement.classList.add("special__key--capslock", "keyboard__key--capslock-off");
                    keyElement.innerHTML= createIconHTML("Caps Lock");

                    keyElement.addEventListener("click", ()=>{
                        this._toggleCapsLock();
                        // console.log(this._createKeys());
                        keyElement.classList.toggle("keyboard__key--capslock-on");
                    });

                    break;

                case "ENTER": 
                    keyElement.classList.add("special__key--enter");
                    keyElement.innerHTML= createIconHTML("ENTER");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value += "\n"; // \n - appending linebreak;
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space": 
                    keyElement.classList.add("special__key--space");
                    keyElement.innerHTML= createIconHTML(" ");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "DEL": 
                    keyElement.classList.add("special__key--del");
                    keyElement.innerHTML= createIconHTML("DEL");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value+=" ";
                        this._triggerEvent("oninput");
                    });

                    break;
                               
                case "Shift ": 
                    keyElement.classList.add("special__key--left-shift");
                    keyElement.innerHTML= createIconHTML("Shift");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "Shift": 
                    keyElement.classList.add("special__key--shift-right");
                    keyElement.innerHTML= createIconHTML("Shift");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "Ctrl": 
                    keyElement.classList.add("special__key--ctrl");
                    keyElement.innerHTML= createIconHTML("Ctrl");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "Win": 
                    keyElement.classList.add("special__key");
                    keyElement.innerHTML= createIconHTML("Win");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                
                case "Alt": 
                    keyElement.classList.add("special__key");
                    keyElement.innerHTML= createIconHTML("Alt");

                    keyElement.addEventListener("click", ()=>{
                        // this.properties.value +=  " ";
                        this._triggerEvent("oninput");
                    });

                    break;
                

                default:
                    keyElement.textContent= key.toLowerCase();

                    keyElement.addEventListener("click", ()=>{
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;

            }
            // fragment is a little container of all keys
            fragment.appendChild(keyElement)

            if(insertLineBreak){
                fragment.appendChild(document.createElement("br"))
            }
        });

        return fragment;

    },

    _triggerEvent(handlerName){ // function to be triggering  one of the previous two events.
        console.log("event triggered! event Name: " + handlerName);
        if (typeof this.eventHandlers[handlerName]== "function")[
            this.eventHandlers[handlerName](this.properties.value)
        ]
    },

    _toggleCapsLock(){
        console.log("caps lock toggled!");
        this.properties.capsLock = !this.properties.capsLock;

        for(const key of this.elements.keys){
            if(key.childElementCount === 0){
                key.textContent=this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },
    open(initialValue, oninput, onclose){ // Function that will open (show)  keyboard will contain 3 arguments.


        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },
    close(){ // function to hide the keyboard.
        this.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden")

    },
};

window.addEventListener("DOMContentLoaded",function(){
    keyboard.init();
    // keyboard.open("dcode ",function (currentValue){
    //     console.log(currentValue);
    // },function(currentValue){
    //     console.log("keyboard closed! Finishing value: " + currentValue);
    // });
    
})