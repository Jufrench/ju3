import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor: MantineColorsTuple = [
  '#f3f3fe',
  '#e4e6ed',
  '#c8cad3',
  '#a9adb9',
  '#9093a4',
  '#808496',
  '#767c91',
  '#656a7e',
  '#585e72',
  '#4a5167'
];

export const theme = createTheme({
  colors: {
    myColor,
  }
});
