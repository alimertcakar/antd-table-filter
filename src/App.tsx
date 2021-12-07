import FilterableTable, { FilterTypes } from "components/FilterableTable";
import Table from "components/Table";
import React from "react";

function App() {
  const filters = [{ type: FilterTypes.sort }];

  return (
    <main>
      <h1>Ant-d Table Filter</h1>

      <FilterableTable renderTable={() => <Table />} filters={filters} />
    </main>
  );
}

export default App;
