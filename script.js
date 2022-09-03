var character = document.getElementById("character");
document.addEventListener("click", jump);
    function jump(){
        if(character.classList == "jump"){return;}
        character.classList.add("jump");
        setTimeout(removeJump, 250); 
};
function removeJump(){
    character.classList.remove("jump");
}
