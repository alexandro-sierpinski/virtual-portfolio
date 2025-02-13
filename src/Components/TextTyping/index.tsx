import { useState, useEffect, useContext, useRef } from "react"
import { Typography, Box } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { getIntroTypingStyles } from "./style"
import { TranslateContext } from "../../Context/Languages/Translate"

type Props = {
  text: string
  styleText?: object
  styleContainer?: object
  timer?: number
}

export const TextTyping = (props: Props) => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const indexRef = useRef(0)
  const intervalRef = useRef<number | null>(null)

  const { translate, language } = useContext(TranslateContext) as {
    translate: (key: string) => string
    language: string
  }

  const { theme } = useContext(ThemeContext) as {
    theme: any
    darkMode: boolean
  }

  const styles = getIntroTypingStyles(theme)

  useEffect(() => {
    setDisplayText("")
    indexRef.current = 0

    const translatedText = translate(props.text)

    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      if (indexRef.current < translatedText.length) {
        setDisplayText((prev) => prev + translatedText.charAt(indexRef.current))
        indexRef.current++
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, props.timer ? props.timer : 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [language])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <Box sx={{
      ...props.styleContainer ? props.styleContainer : styles.container,
      transition: "all 0.3s ease",
    }}>
      <Typography component="main" sx={{ ...styles.text ? styles.text : props.styleText }}>
        {displayText}
        <Typography sx={{
          ...styles.cursor,
          ...(showCursor ? styles.cursorVisible : styles.cursorHidden)
        }}>
          |
        </Typography>
      </Typography>
    </Box>
  )
}

