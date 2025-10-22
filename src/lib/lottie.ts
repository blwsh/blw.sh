import {lazy} from "react";

// Dynamically import DotLottieReact to avoid including it in the main bundle

export const DotLottieReact = lazy(async () => {
  return {default: (await import('@lottiefiles/dotlottie-react')).DotLottieReact}
});

export type DotLottie = import('@lottiefiles/dotlottie-react').DotLottie