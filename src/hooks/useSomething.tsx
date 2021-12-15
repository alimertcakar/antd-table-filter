import { TableFilters } from "components/FilterableTable";
import React, { useDebugValue } from "react";
import { useState } from "react";

export default function useTableFilters() {
  const [filters, setFilters] = useState<TableFilters>();
  useDebugValue("Ben bir hook'um");
  useDebugValue("Ben bir hassaook'um");
  useDebugValue("Ben bir hook'um");
}
