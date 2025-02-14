import { useState, useEffect, useContext, useRef } from "react"
import { Typography, Box } from "@mui/material"
import { ThemeContext } from "../../Context/Theme/Theme"
import { getIntroTypingStyles } from "./style"
import { FunctionsContext } from "../../Context/Functions/Functions"

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

  const { translate, language } = useContext(FunctionsContext) as {
    translate: (key: string) => string
    language: string
  }

  const { theme } = useContext(ThemeContext) as {
    theme: any
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
      padding: 2,
      borderRadius: 0,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",      
      touchAction: "manipulation",  
    }}>
      <Typography
        component="main"
        sx={{
          ...props.styleText ? props.styleText : styles.text
        }}>
        {displayText}
        <Typography
          component="span"
          sx={{
            ...styles.cursor,
            ...(showCursor ? styles.cursorVisible : styles.cursorHidden)
          }}>
          |
        </Typography>
      </Typography>
    </Box>
  )
}

