class SlingShot {
    constructor(bodyA,pointB){
        var options = {
        length : 20,
        stiffness : 0.3,
        bodyA : bodyA,
        pointB : pointB
        }
        this.pointB = pointB
this.sling = Constraint.create(options)
World.add (world,this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
          if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
        }
    }
}