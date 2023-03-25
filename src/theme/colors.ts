import { ThemeVariants } from ".";

const colors: Record<string, Record<ThemeVariants, string>> = {
  primary: {
    '🌞': 'darkslateblue',
    '🌚': '#b8b4ef',
  },
  secondary: {
    '🌞': 'orange',
    '🌚': 'orange'
  },
  background: {
    '🌞': 'aliceblue',
    '🌚': '#0a0c16'
  },
  text: {
    '🌞': 'darkslateblue',
    '🌚': '#b8b4ef',
  },
  shadow: {
    "🌚": 'darkslateblue',
    "🌞": '#b8b4ef'
  }
}

export default colors;