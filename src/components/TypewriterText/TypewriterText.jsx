import { useEffect, useState } from 'react'
import './TypewriterText.css'

function TypewriterText({ text }) {
  const [visibleText, setVisibleText] = useState('')

  useEffect(() => {
  let currentIndex = 0
  let intervalId
  let timeoutId

  function startTyping() {
    currentIndex = 0
    setVisibleText('')

    intervalId = setInterval(() => {
      currentIndex += 1
      setVisibleText(text.slice(0, currentIndex))

      if (currentIndex === text.length) {
        clearInterval(intervalId)

        timeoutId = setTimeout(() => {
          startDeleting()
        }, 10000)
      }
    }, 120)
  }

  function startDeleting() {
    intervalId = setInterval(() => {
      currentIndex -= 1
      setVisibleText(text.slice(0, currentIndex))

      if (currentIndex === 0) {
        clearInterval(intervalId)

        timeoutId = setTimeout(() => {
          startTyping()
        }, 600)
      }
    }, 80)
  }

  startTyping()

  return () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
  }
}, [text])

return (
  <h1 className="typewriter">
    {visibleText}
    <span className="typewriter-cursor" aria-hidden="true">
      |
    </span>
  </h1>
)

}

export default TypewriterText
