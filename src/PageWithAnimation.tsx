import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Animation } from './types';
import styles from './animationStyles.module.css';
import { useEffect, useRef } from 'react';

export const PageWithAnimation = ({ animations }: { animations: Animation[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  useEffect(() => {
    animations.forEach(({ animationDuration, animationDelay: delayBeforeStart, elementId }) => {
      const element = containerRef.current?.querySelector(`#${elementId}`);
      if (!element) return null;
      const startingFrame = delayBeforeStart * fps;
      const totalDuration = animationDuration + delayBeforeStart;
      const totalFrames = totalDuration * fps;

      const progress = interpolate(frame, [startingFrame, totalFrames], [0, 1], {
        extrapolateRight: 'clamp',
      });

      const animationDelay = progress * -animationDuration;
      element.style.animationDelay = `${animationDelay}s`;
    })
  }, [animations, fps, frame]); // Re-runs when frame is updated

  return (
    <AbsoluteFill className={styles.page} ref={containerRef}>
      <div
        className={styles.step1}
        id="step1"
        style={{
          animationPlayState: 'paused',
        }}
      >
        <p>Text 1</p>
      </div>
      <div
        className={styles.step2}
        id="step2"
        style={{
          animationPlayState: 'paused',
        }}
      >
        <p>Text 2</p>
      </div>
    </AbsoluteFill>
  );
};
