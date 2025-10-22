import {ComponentProps, MouseEvent, useEffect, useRef, useState} from 'react';

import type {SpringOptions} from 'motion/react';
import {motion, useMotionValue, useSpring} from 'motion/react';
import {preload} from "react-dom";

interface TiltedCardProps {
  imageSrc: ComponentProps<'img'>['src'];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  initialRotateX?: number;
  initialRotateY?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export function TiltedCard(
  {
    imageSrc,
    captionText = '',
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '300px',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    initialRotateX = 0,
    initialRotateY = -20,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false
  }: TiltedCardProps
) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(initialRotateX), springValues);
  const rotateY = useSpring(useMotionValue(initialRotateY), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    preload(imageSrc, {as: 'image'});
  }, [imageSrc]);

  function handleMouse(e: MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(initialRotateX);
    rotateY.set(initialRotateY);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.a style={{width: imageWidth, height: imageHeight, rotateX, rotateY, scale}}
        href="https://swipe-zero-app-d3i0ih482vjkgqajkq9g.lp.dev/" target="_blank" rel="nofollow"
        className="[transform-style:preserve-3d] rounded-xl
          bg-gradient-to-t from-black/80 to-black/90
        ">
        <motion.video
          src={imageSrc} autoPlay={true} loop={true} muted={true}
          className="
            absolute top-0 left-0 object-cover
            will-change-transform [transform:translateZ(0)]
            rounded-xl border-white/50 border-2
            mask-b-from-25% mask-b-to-100%
            blur-[2px] hover:blur-[0.2px]
            brightness-[0.8] hover:brightness-[1]
            mask-size-[auto_100%] hover:mask-size-[auto_120%]
            transition-all duration-1000 ease-in-out
          "
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />
        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute top-0 pointer-events-none left-0 w-full h-full z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.a>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
