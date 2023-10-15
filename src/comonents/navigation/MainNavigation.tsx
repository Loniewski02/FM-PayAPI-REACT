import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MobileNavLinks from './MobileNavLinks';
import DesktopNavLinks from './DesktopNavLinks';
import Wrapper from '../layout/Wrapper';

import logo from '../../assets/shared/desktop/logo.svg';
import styles from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
	const [isDesktop, setisDesktop] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setisDesktop(true);
			} else {
				setisDesktop(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className={`${styles.nav}`}>
			<Wrapper className={styles.nav__wrapper}>
				<Link
					to='/'
					className={styles.logo}
					aria-label='home'>
					<img
						src={logo}
						alt=''
					/>
				</Link>
				{!isDesktop && <MobileNavLinks />}
				{isDesktop && <DesktopNavLinks />}
				
			</Wrapper>
		</nav>
	);
};

export default MainNavigation;
