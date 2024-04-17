# Pagination Component - pagination-ts-js

The `pagination-ts-js` package is a versatile pagination component for React projects. It offers easy implementation of pagination with features like setting total pages, tracking the current page, and customization options for styling buttons. It's designed to simplify pagination integration while allowing for seamless customization to match your project's design.

## Features

- **TypeScript Support**: Ensures type safety and improved development experience.
- **Customization Options**: Easily customize styles, button appearance, and add icons for a tailored pagination component.
- **Easy Integration**: Simple API for seamless integration into React and Next.js projects.
- **Total Page Control**: Set the total number of pages to accommodate different datasets.
- **Current Page Tracking**: Tracks the active page for smooth navigation.
- **Handle Page Change**: Provides a callback function to manage page transitions effortlessly.
- **Next.js Compatibility**: Compatible with Next.js projects for server-side rendering and static generation.
- **Responsive Design**: Adapts to various screen sizes for a consistent user experience.
- **Accessibility**: Prioritizes accessibility standards for inclusivity.
- **Extendable**: Easily extend functionality or add features as needed.
- **Documentation and Support**: Comprehensive documentation and community support for effective usage.

These features make `pagination-ts-js` a valuable tool for implementing pagination in React and Next.js projects, offering flexibility, ease of use, and a seamless user experience.

## Installation

To install the Pagination component, you can use npm or yarn:

```bash
npm install pagination-ts-js
```

Or

```bash
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
        buttonOptions={{
          buttonStyle: "",
          preButton: {
            btnText: "Pre", //default text is "Previous"
           icon: "", //svg component
            textHide: false, // true to hide text
          },
          nextButton: {
            btnText: "Nex", //default text is "Next"
            icon: "", //svg component
            textHide: false, // true to hide text
          },
        }}
      />
  );
};

export default App;
```

## Props

The `Pagination` component accepts the following props:

| Name               | Type     | Description                                                                    | Default Value       |
| ------------------ | -------- | ------------------------------------------------------------------------------ | ------------------- |
| `totalPage`        | number   | Total number of pages.                                                         | -                   |
| `currentPage`      | number   | Current active page.                                                           | -                   |
| `handlePageChange` | function | Function to handle page change. Accepts a function that sets the current page. | -                   |
| `customStyle`      | string   | Custom CSS styles for the pagination component.                                | Empty string (`""`) |
| `buttonOptions`    | object   | Object containing options for customization of buttons. See below for details. | -                   |

### buttonOptions

| Name          | Type   | Description                                             | Default Value |
| ------------- | ------ | ------------------------------------------------------- | ------------- |
| `buttonStyle` | string | CSS class for styling the buttons.                      | -             |
| `preButton`   | object | Options for the previous button. See below for details. | -             |
| `nextButton`  | object | Options for the next button. See below for details.     | -             |

#### preButton and nextButton Options

| Name       | Type    | Description                                   | Default Value                                   |
| ---------- | ------- | --------------------------------------------- | ----------------------------------------------- |
| `btnText`  | string  | Text to be displayed on the button.           | "Previous" for preButton, "Next" for nextButton |
| `icon`     | element | Icon component to be displayed on the button. | -                                               |
| `textHide` | boolean | Determines whether to hide the button text.   | `false`                                         |
