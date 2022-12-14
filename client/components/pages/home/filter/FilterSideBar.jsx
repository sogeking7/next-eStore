import { Box } from "@mantine/core";

import Filter from "./Filter";

function FilterSideBar() {
  return (
    <Box className="md:w-1/3 lg:w-1/4 md:block basic:hidden">
      <Filter />
    </Box>
  );
}

export default FilterSideBar;
