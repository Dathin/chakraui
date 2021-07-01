import { extendTheme } from "@chakra-ui/react"

const fonts = {
  heading: "Poppins",
  body: "Poppins",
}

const colors = {
  white: {
    100: '#F5F8FA'
  }
}

const theme = extendTheme({fonts, colors})
export default theme