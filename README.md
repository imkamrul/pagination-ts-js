# Pagination Component - pagination-ts-js

## Installation

To install the Pagination component, you can use npm or yarn:

```bash
npm install pagination-ts-js
--or--
yarn add pagination-ts-js

```

Example

```bash
import { Pagination } from "pagination-ts-js";
import  { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      totalPage={10}
      currentPage={currentPage}
      handlePageChange={setCurrentPage}
      customStyle=""
    />
  );
};

export default App;
```

## Props

The Pagination component accepts the following props:

- `totalPage` (number): Total number of pages.
- `currentPage` (number): Current active page.
- `handlePageChange` (function): Function to handle page change. Accepts a function that sets the current page.
- `customStyle` (string, optional): Custom CSS styles for the pagination component.
