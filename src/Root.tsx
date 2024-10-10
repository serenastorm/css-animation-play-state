import { Composition } from 'remotion';
import { PageWithAnimation } from './PageWithAnimation';
import { Animation } from './types';

const FRAMES_PER_SECOND = 30;

const PAGE_DURATION_IN_SECONDS = 7;

const ANIMATIONS: Animation[] = [{
	animationDuration: 2,
	animationDelay: 1,
	elementId: 'step1',
}, {
	animationDuration: 1,
	animationDelay: 1,
	elementId: 'step2',
}]

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
				defaultProps={{ animations: ANIMATIONS }}
			/>
		</>
	);
};
