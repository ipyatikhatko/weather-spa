import { ThemeVariants } from ".";
import colors from "./colors";
const components: Record<string, Record<string, Record<ThemeVariants, string>>> = {
  button: {
    text: {
      "🌞": colors.primary["🌚"],
      "🌚": colors.primary["🌞"],
    },
    bg: {
      "🌞": colors.primary["🌞"],
      "🌚": colors.primary["🌚"]
    },
  },
  card: {
    bg: {
      "🌞": colors.primary["🌞"],
      "🌚": colors.primary["🌚"]
    }
  }
}

export default components;