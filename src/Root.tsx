import { Composition } from 'remotion';
import { PageWithAnimation } from './PageWithAnimation';

const ANIMATION_DURATION_IN_SECONDS = 0.6;
const ANIMATION_DELAY_IN_SECONDS = 1;
const FRAMES_PER_SECOND = 30;

const PAGE_DURATION_IN_SECONDS = 7;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="PageWithAnimation"
				component={PageWithAnimation}
				durationInFrames={FRAMES_PER_SECOND * PAGE_DURATION_IN_SECONDS}
				fps={FRAMES_PER_SECOND}
				width={90}
				height={160}
				defaultProps={{ animationDuration: ANIMATION_DURATION_IN_SECONDS, animationDelay: ANIMATION_DELAY_IN_SECONDS }}
			/>
		</>
	);
};
