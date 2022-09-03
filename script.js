//allows the user to jump in accordance to clicking
var sprite = document.getElementById("sprite");
document.addEventListener("click", jump);
    function jump(){
        if(sprite.classList == "jump"){return;}
        sprite.classList.add("jump");
        setTimeout(removeJump, 800); 
};
function removeJump(){
    sprite.classList.remove("jump");
}

//prompts the screen of death when contact between sprites is made
var deathcheck = setInterval(function() {
    let spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
    let mobLeft = parseInt(window.getConputedStyle(mob).getPropertyValue("left"));
    if(mobLeft<20 && mobLeft>-20 && spriteTop>=130){
        mob.style.animation = "none";
        alert("You died :p")
        mob.style.animation = "mob 1s infinite linear"
    }}
)