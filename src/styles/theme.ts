import { extendTheme } from "@chakra-ui/react"

const fonts = {
  heading: "Poppins",
  body: "Poppins",
}

const colors = {
  white: {
    100: '#F5F8FA'
  },
  gray: {
    200: '#47585B'
  },
  yellow: {
    900: '#FFBA08'
  }
}

const styles = {
  global: {
    "body": {
      "background": "white.100"
    }
  }
}

const theme = extendTheme({fonts, colors, styles})
export default theme