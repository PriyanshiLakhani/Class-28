class SlingShot {
    constructor(bodyA,bodyB){
        var options = {
        length : 20,
        stiffness : 0.3,
        bodyA : bodyA,
        bodyB : bodyB
        }
this.sling = Constraint.create(options)
World.add (world,this.sling)
    }
    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        line (posA.x,posA.y,posB.x,posB.y);
    }
}