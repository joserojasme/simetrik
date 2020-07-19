import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#3c75ff',
      main: '#1c3643',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#3c75ff',
      main: '#85c638',
      dark: '#3c75ff',
      contrastText: '#fff'
    }
  },
  status: {
    danger: 'orange'
  }
})

export default theme
