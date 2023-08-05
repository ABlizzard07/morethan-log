import {
  gray,
  blue,
  red,
  green,
  indigo,
} from "@radix-ui/colors"

export type Colors = typeof colors.light

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
}
