class BaseCharacter {}
interface PhysicsObject {
  x: number;
}
interface ThreeDItem {
  coordinate: number;
  children: ThreeDItem;
}

function something(some: ThreeDItem | PhysicsObject) {
  console.log(some);
}
