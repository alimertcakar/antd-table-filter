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

type PersonType = {
  username: string;
};
function xer(x: PersonType | null | unknown) {
  if (x !== null && typeof x === "object") {
    if ("username" in x) {
      console.log(x.username);
    }
  } else {
  }
}

function expectAbc(abc: "a" | "b" | "c") {
  if (abc === "a") {
  } else if (abc === "b") {
  } else {
    const never: never = abc;
  }
}

// TYPE GUARD

function isObject(obj: any): obj is object {
  if (Object.prototype.toString.call(obj) === "[Object object]") {
    return true;
  } else {
    return false;
  }
}

let somevar: any = {};

isObject();

if (isObject(somevar)) {
  somevar;
  console.log(somevar);
} else {
  console.log(somevar);
}

interface Mail {
  subject: string;
}

interface AttachmentMail extends Mail {
  attachments: string;
}

interface LengthConstraint {
  length: number;
}

class VarToJson<T extends LengthConstraint> {
  constructor(private varToParse: T) {}

  parse() {
    return JSON.stringify(this.varToParse);
  }
}

const parsedArr = new VarToJson([12]).parse();

class Person<T> {
  public constructor(private name: T, private age: T) {}

  public serialize() {
    return [this.name, this.age];
  }
}

const numberPerson = new Person<number>(1, 2);
const stringPerson = new Person<string>("a", "b");

type Point = { x: number; y: number };
type P = keyof Point;

interface Todo {
  id: number;
  text: string;
  due: Date;
}

interface Todo {
  id: number;
  text: string;
  due: Date;
}

type TodoTypes = keyof Todo;

TodoTypes = "id" | "text" | "due";

interface Car {
  engine: "1600cc";
}

interface Motorcycle {
  engine: "600cc";
}

function fetcher() {
  const data = fetch("hello");
  return data;
}

type FetcherResponse = typeof fetcher;
