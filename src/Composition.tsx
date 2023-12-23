import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styles from './styles.module.css';

const ANIMATION_DURATION = 1;

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const animationDelay = progress * -ANIMATION_DURATION;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				className={styles.box}
				style={{
					backgroundColor: '#4290f5',
					width: 200,
					height: 200,
					borderRadius: 10,
					animationPlayState: 'paused',
					animationDelay: `${animationDelay}s`,
				}}
			/>
		</AbsoluteFill>
	);
};
