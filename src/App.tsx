import FilterableTable, { FilterTypes } from "components/FilterableTable";
import MemoizationExample from "components/Memoization/MemoizationExample1";
import MemoizationExample3 from "components/Memoization/MemoizationExample3";
import MemoizationExample4 from "components/Memoization/MemoizationExample4";
import Table from "components/Table";
import React from "react";

function App() {
  const filters = [{ type: FilterTypes.sort }];

  return (
    <main>
      {/* <h1>Ant-d Table Filter</h1> */}
      <FilterableTable renderTable={() => <Table />} filters={filters} />
      <MemoizationExample />
      <MemoizationExample3 />
      <MemoizationExample4 />
    </main>
  );
}

export default App;
