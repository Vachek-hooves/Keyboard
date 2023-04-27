const BODY=document.body;
const MAIN=document.createElement("main");
const SECTION=document.createElement("section");

const KEYBOARD__SECTION=document.createElement("section");
KEYBOARD__SECTION.classList.add("keyboard__section");


BODY.append(MAIN);


// create textarea inside section tag
document.addEventListener('DOMContentLoaded',()=>{
    const textarea=document.createElement('textarea');
    textarea.classList.add("textarea__style");

    // create and style section tag
    SECTION.classList.add("textarea__section");
    SECTION.append(textarea);

    MAIN.append(SECTION,KEYBOARD__SECTION);

})

document.addEventListener("DOMContentLoaded",()=>{
    
})

