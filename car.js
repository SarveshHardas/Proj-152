AFRAME.registerComponent("car", {
    schema: {
      width: { type: "number", default: 30 },
      height: { type: "number", default: 3 },
      clickCounter:{type:"number",default:0}
    },
  
    init: function(){
        this.el.setAttribute("geometry",{
            width:this.data.width,
            height:this.data.height
        });
        this.el.setAttribute("material",{color:"red"});
    },
  });

  AFRAME.registerComponent("rotate", {
    schema: {
      moveX: { type: "number", default: 0 },
    },
    update: function () {
  
      window.addEventListener("click", (e) => {   
       const rotation={x:20,y:0,z:0};
       this.el.setAttribute("rotation",rotation)
      });
      var pos = this.el.getAttribute("position");
      pos.x = pos.x + this.data.moveX;
      this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
    }
  });
  
  
  