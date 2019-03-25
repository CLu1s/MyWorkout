import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.googleFonts = [
    {
      name: "Roboto",
      styles: ["400","700"],
    },
    {
      name: "IBM Plex Sans",
      styles: ["400", "600", "700"],
    },
]
fairyGatesTheme.bodyFontFamily = ['IBM Plex Sans']
fairyGatesTheme.headerFontFamily = ['Roboto']
fairyGatesTheme.baseFontSize = "10px"
const typography = new Typography(fairyGatesTheme)


export default typography