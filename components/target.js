AFRAME.registerComponent("target-ring",{
    init:function(){
    for(var i=1; i<=20;i++){
        var id=`ring${i}`;
        var posX=(Math.random()*3000+(-1000))
        var posY=(Math.random()*2+(-1))
        var posZ=(Math.random()*3000+(-1000))
        var position={x:posX,y:posY,z:posZ}
        this.createRings(id,position)
    }
    },

    createRings:function(id,position){
        var terrainel=document.querySelector("#terrain")
        var ringel=document.createElement("a-entity");
        ringel.setAttribute("id",id)
        ringel.setAttribute("position",position)
        ringel.setAttribute("material","color","red");
        ringel.setAttribute("geometry",{primitive:"torus",radius:8})
        ringel.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2
        })
        ringel.setAttribute("game-play",{
            elementId:`#${id}`
        })
        terrainel.appendChild(ringel)
    }
})