// @ts-nocheck
import useTableFilters from "hooks/useTableFilters";
import React from "react";

interface Props {
  renderTable: () => any;
  filters: TableFilters;
}

export enum FilterTypes {
  sort = "SORT",
  search = "SEARCH",
}

export type TableFilter = {
  type: FilterTypes;
};

export type TableFilters = TableFilter[];

function FilterableTable({ renderTable, filters: _filters }: Props) {
  const { renderFilteredTable } = useTableFilters(renderTable, _filters);
  console.log(renderFilteredTable, "renderFilteredTable");
  // return null;
  return <>{renderFilteredTable}</>;
}

export default FilterableTable;
