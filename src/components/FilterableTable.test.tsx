import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterableTable, { FilterTypes } from "components/FilterableTable";
import Table from "components/Table";
const filters = [{ type: FilterTypes.sort }];

it("should render", () => {
  render(<FilterableTable renderTable={() => <Table />} filters={filters} />);

  expect(screen.getByText("Mike")).toBeInTheDocument();
});
