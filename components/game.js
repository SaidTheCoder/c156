AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    init:function(){
        var duration=120;
        var timerel=document.querySelector("#timer");
        this.startTimer(duration,timerel)
    },

    startTimer:function(duration,timerel){
        var minutes;
        var seconds;
        setInterval(()=>{
            if(duration>=0){
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)

                if(minutes<10){
                    minutes="0"+minutes
                }

                if(seconds<10){
                    seconds="0"+seconds
                }

                timerel.setAttribute("text",{value:minutes+":"+seconds})
                duration-=1
            }
            else{
                this.gameOver()
            }
        },1000)
    },
    update:function(){
        this.iscollided(this.data.elementId)
    },
    iscollided:function(elementId){
        const element=document.querySelector(elementId);
        element.addEventListener("collide",e=>{
            if(elementId.includes("#ring")){
                //console.log(elementId+"COLLISION OMG OMG OMG OMG")
                element.setAttribute("visible",false)
                this.updateTargets()
                this.updateScore()
            }
            // else if(elementId.includes("#hurdle")){
            //     console.log(elementId+"COLLISION OMG OMG OMG OMG but its a bird :O")
            // }

            else{
                this.gameOver()
            }
        })
    },

    updateTargets:function(){
        var element=document.querySelector("#targets")
        var count=element.getAttribute("text").value
        var currentTargets=parseInt(count)
        currentTargets-=1;
        element.setAttribute("text",{
            value:currentTargets
        })
    },

    updateScore:function(){
        var element=document.querySelector("#score")
        var count=element.getAttribute("text").value
        var currentScore=parseInt(count)
        currentScore+=50;
        element.setAttribute("text",{
            value:currentScore
        })
    },

    gameOver:function(){
        var planeel=document.querySelector("#airplane")
        var element=document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        planeel.setAttribute("dynamic-body",{mass:1})

    }
})