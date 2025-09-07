import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function TableOpirarion() {
  return (
    <div className=" grid grid-cols-2 gap-2">
      <Filter
        options={[
          { value: "all", label: "all" },
          { value: "with-discount", label: "with discount" },
          { value: "with-no-discount", label: "no discount" },
        ]}
        filterfield="discount"
      />
      <SortBy
        sortfield="sortBy"
        Options={[
          { value: "name-asc", label: "Sort By name (A-Z) " },
          { value: "name-desc", label: "Sort By name (Z-A) " },
          { value: "Price-asc", label: "Sort By price (low first) " },
          { value: "price-desc", label: "Sort By price (high first) " },
        ]}
      />
    </div>
  );
}
