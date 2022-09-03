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

var deathcheck = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let mobLeft = parseInt(window.getConputedStyle(mob).getPropertyValue("left"));
    if(mobLeft<20 && mobLeft>-20 && characterTop>=130){
        mob.style.animation = "none";
        alert("You died :p")
        mob.style.animation = "mob 1s infinite linear"
    }}
    