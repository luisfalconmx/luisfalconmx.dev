import { map } from 'nanostores'

type Theme = {
  darkmode: boolean
}

const theme = map<Theme>({
  darkmode: false
})

export default theme
