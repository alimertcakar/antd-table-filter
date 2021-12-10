// JSON types

type JSONPrimitive = number | string | boolean | null | undefined | symbol;
type JSONObject = { [key: string]: JSONPrimitive };
type JSONArray = JSONPrimitive[];
type JSONType = JSONPrimitive | JSONObject | JSONArray;

const somethingG: JSONType = {
  DASD: "DSDS",
  2: null,
  null: Symbol.for("selam"),
};

const doSomeMath: () => void | number = () => {
  if (true) {
    return;
  }

  return 12321;
};

const ads = doSomeMath();
console.log(ads);
console.log(ads);
console.log(ads);
console.log(ads);

console.log("ads");

const { something, something2, ...remainingProps } = props;

<Component {...remainingProps} />;
