import { Link } from 'react-router-dom';

import Wrapper from '../layout/Wrapper.js';
import SubscribeForm from '../UI/SubscribeForm.js';

import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import phoneMockup from '../../assets/home/desktop/phoneMockup.png';
import styles from './HomeHeader.module.css';

const HomeHeader: React.FC = () => {
	return (
		<header className={styles.header}>
			<Wrapper className={styles.header__wrapper}>
				<img
					className={styles.header__img}
					src={phoneMockup}
					alt=''
				/>
				<div className={styles['header__info']}>
					<h1 className={styles['header__info-title']}>Start building with our APIs for absolutely free.</h1>
					<SubscribeForm id='header-email' />
					<p className={styles['header__info-text']}>
						Have any questions? <Link to='contact'>Contact Us</Link>
					</p>
				</div>
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
