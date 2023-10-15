import { motion, useScroll, useTransform } from 'framer-motion';

import { Link } from 'react-router-dom';

import Wrapper from '../layout/Wrapper.js';
import SubscribeForm from '../UI/SubscribeForm.js';

import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import phoneMockup from '../../assets/home/desktop/phoneMockup.png';
import styles from './HomeHeader.module.css';

const HomeHeader: React.FC = () => {
	let { scrollY } = useScroll();

	const opacityImg = useTransform(scrollY, [0, 200, 500], [1, 0.5, 0]);
	const xImg = useTransform(scrollY, [0, 200, 400], [0, 200, 350]);
	const yImg = useTransform(scrollY, [0, 200, 300], [0, -100, -150]);

	const scale1 = useTransform(scrollY, [0, 200, 400], [1, 1.15, 1.25]);

	return (
		<header className={styles.header}>
			<Wrapper className={styles.header__wrapper}>
				<motion.img
					className={styles.header__img}
					src={phoneMockup}
					alt=''
					style={{ x: xImg, opacity: opacityImg, y: yImg }}
				/>
				<motion.div
					className={styles['header__info']}
					style={{
						scale: scale1,
						y: yImg,
					}}>
					<h1 className={styles['header__info-title']}>Start building with our APIs for absolutely free.</h1>
					<SubscribeForm id='header-email' />
					<p className={styles['header__info-text']}>
						Have any questions? <Link to='contact'>Contact Us</Link>
					</p>
				</motion.div>
				<img
					src={circle}
					alt=''
					className={styles.circle}
				/>
			</Wrapper>
		</header>
	);
};

export default HomeHeader;
