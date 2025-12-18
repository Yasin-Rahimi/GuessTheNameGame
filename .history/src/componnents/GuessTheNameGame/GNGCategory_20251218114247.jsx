import { Dropdown, DropdownItem, createTheme } from "flowbite-react";

const customTheme = createTheme({
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    base: "z-10 w-fit rounded-xl shadow-xl focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    item: {
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm hover:bg-indigo-100 dark:hover:bg-gray-600 transition",
    },
    style: {
      light: "bg-white text-gray-900",
      dark: "bg-gray-800 text-white",
    },
  },
});

export default function GNGCategory({ onClick }) {
  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <Dropdown
      label="Choose the category"
      customTheme={customTheme}
      dismissOnClick={false}
      className="w-full"
    >
      <DropdownItem onClick={() => handleClick("country")}>
        🌍 Countries
      </DropdownItem>
      <DropdownItem onClick={() => handleClick("sport")}>
        ⚽ Sports
      </DropdownItem>
      <DropdownItem onClick={() => handleClick("fruit")}>
        🍎 Fruits
      </DropdownItem>
      <DropdownItem onClick={() => handleClick("color")}>
        🎨 Colors
      </DropdownItem>
    </Dropdown>
  );
}
