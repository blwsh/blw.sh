import {useEffect, useState} from "react";

import {DotLottieReact, DotLottie} from "@/lib/lottie";

import {useTheme} from "@/components/ThemeProvider"

export function ThemeToggle({className}: {className: string}) {
  const frameOffset = 60

  const {theme, setTheme} = useTheme()
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

  useEffect(() => {
    dotLottie?.setFrame(theme === "light" ? dotLottie.totalFrames - frameOffset : frameOffset);
    dotLottie?.setMode(theme === "light" ? 'reverse' : 'forward')
    dotLottie?.play()
  }, [dotLottie, theme])

  return (
    <DotLottieReact
      autoplay={false} loop={false}
      src="https://lottie.host/5152204c-36c0-4aa0-966c-8dc6f804d71a/uAWSSvZRqK.lottie"
      className={className}
      dotLottieRefCallback={setDotLottie}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      mode={theme === "light" ? 'forward' : 'reverse'}
    />
  )
}