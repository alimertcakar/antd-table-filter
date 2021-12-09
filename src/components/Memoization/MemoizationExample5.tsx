// TODO example with useRef()

export {};

// import React, { useState } from "react";

// interface Props {}

// const HeavyComponent = () => {
//   console.log("heavyy!");
//   return (
//     <div
//       style={{
//         border: "1px solid #e6e6e6",
//         display: "inline-flex",
//         padding: 10,
//         margin: 10,
//       }}
//     >
//       I am a heavy component! I take 10 seconds to render.
//     </div>
//   );
// };

// const Counter = ({ HeavyComponentTwo }: { HeavyComponentTwo: any }) => {
//   const [count, setCount] = useState(0);
//   return (
//     <div onClick={() => setCount((prev) => prev + 1)}>
//       Count:{count}
//       <HeavyComponent />
//       {HeavyComponentTwo}
//     </div>
//   );
// };

// const MemoizationExample = (props: Props) => {
//   return (
//     <div>
//       <h2>Memoization</h2>
//       <Counter HeavyComponentTwo={<HeavyComponent />} />
//     </div>
//   );
// };

// export default MemoizationExample;
