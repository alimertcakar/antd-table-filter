import { TableFilters } from "components/FilterableTable";
import React from "react";
import { useState } from "react";

function useTableFilters(renderTable: () => any, _filters: any) {
  const [filters, setFilters] = useState<TableFilters>(_filters);
  const renderFilteredTable = applyFilters(renderTable, filters);

  return { renderFilteredTable };
}

export default useTableFilters;

function applyFilters(renderComponent: any, filters: any) {
  const filteredComponent = React.cloneElement(renderComponent(), {
    randomProp: "xxx",
  });

  return filteredComponent;
}
