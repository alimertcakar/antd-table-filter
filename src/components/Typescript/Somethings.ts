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

let x;

type Person = {
  username: string;
};
function xer(x: Person | null | unknown) {
  if (x !== null && typeof x === "object") {
    if ("username" in x) {
      console.log(x.username);
    }
  } else {
  }
}

function expectAbc(abc: "a" | "b") {
  if (abc === "a") {
  } else if (abc === "b") {
  } else {
    const never: never = abc;
  }
}
