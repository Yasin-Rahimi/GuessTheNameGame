import { Progress, createTheme, ThemeProvider } from "flowbite-react";

const customTheme = createTheme({
    base: "w-full overflow-hidden rounded-full bg-pink-200 dark:bg-gray-700",
    label: "mb-1 flex justify-between font-medium dark:text-white",
    bar: "rounded-full text-center font-medium leading-none text-white",
    color: {
      blue: "bg-blue-500",
    },
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6",
    },
  });

export default function ProgressBar({ progress }) {
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <Progress
                progress={progress}
                color="blue"
                size="xl"
                labelProgress
                />
            </ThemeProvider>
        </>
    )
}