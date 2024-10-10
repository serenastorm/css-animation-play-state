import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { StoryPage } from './types';
import styles from './animationStyles.module.css';

export const PageWithAnimation = ({ animationDuration, animationDelay: delayBeforeStart }: StoryPage) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startingFrame = delayBeforeStart * fps;
  const totalDuration = animationDuration + delayBeforeStart;
  const totalFrames = totalDuration * fps;

  const progress = interpolate(frame, [startingFrame, totalFrames], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const animationDelay = progress * -animationDuration;

  return (
    <AbsoluteFill className={styles.page}>
      <div
        className={styles.step1}
        style={{
          animationPlayState: 'paused',
          animationDelay: `${animationDelay}s`,
        }}
      >
        <p>100</p>
      </div>
      <div
        className={styles.step2}
        style={{
          animationPlayState: 'paused',
          animationDelay: `${animationDelay}s`,
        }}
      >
        <p>102</p>
      </div>
    </AbsoluteFill>
  );
};
