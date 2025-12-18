import { Button, createTheme, ThemeProvider } from "flowbite-react";
import { Dropdown, DropdownItem } from "flowbite-react";

const customTheme = createTheme({
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
});

export default function GNGCategory({ onClick }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      
      <div className="rounded-2xl bg-gray-900/90 p-8 shadow-2xl border border-white/10">
        <h2 className="mb-6 text-center text-xl font-bold text-white">
          Choose a category
        </h2>

        <Dropdown
          className=""
          label="Select category"
          dismissOnClick={true}
          customTheme={customTheme}
        >
          <DropdownItem onClick={() => onClick("country")}>
            🌍 Countries
          </DropdownItem>

          <DropdownItem onClick={() => onClick("sport")}>
            ⚽ Sports
          </DropdownItem>

          <DropdownItem onClick={() => onClick("fruit")}>
            🍎 Fruits
          </DropdownItem>

          <DropdownItem onClick={() => onClick("color")}>
            🎨 Colors
          </DropdownItem>
        </Dropdown>
      </div>

    </div>
  );
}