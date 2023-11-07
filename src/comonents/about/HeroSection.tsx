import { motion } from 'framer-motion';

import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles['hero-img']}>
				<div className={styles['hero-bg']}></div>
				<img
					className={styles.circle}
					src={circle}
					alt=''
				/>
			</div>
		</section>
	);
};

export default HeroSection;
