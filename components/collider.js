AFRAME.registerComponent("flying-birds",{
    init:function(){
    for(var i=1; i<=20;i++){
        var id=`hurdle${i}`;
        var posX=(Math.random()*3000+(-1000))
        var posY=(Math.random()*2+(-1))
        var posZ=(Math.random()*3000+(-1000))
        var position={x:posX,y:posY,z:posZ}
        this.flyingBirds(id,position)
    }
    },

    flyingBirds:function(id,position){
        var terrainel=document.querySelector("#terrain")
        var birdel=document.createElement("a-entity");
        birdel.setAttribute("id",id)
        birdel.setAttribute("position",position)
        birdel.setAttribute("material","color","red");
        birdel.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdel.setAttribute("scale",{x:500,y:500,z:500})
        birdel.setAttribute("animation-mixture",{})
        birdel.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        })
        birdel.setAttribute("game-play",{
            elementId:`#${id}`
        })
        terrainel.appendChild(birdel)
    }
})