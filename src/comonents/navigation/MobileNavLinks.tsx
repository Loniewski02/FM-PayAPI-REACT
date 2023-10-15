import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import DemoButton from '../UI/DemoButton';

import styles from './MobileNavLinks.module.css';

const NavigationLinks: React.FC = () => {
	const [isActive, setIsActive] = useState<boolean>();
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0) {
				setIsActive(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleNavHandler = () => {
		setIsActive((prevIsActive) => !prevIsActive);
	};

	const closeNavHandler = () => {
		setIsActive(false);
	};

	const navigateHandler = () => {
		navigate('#subscribe');
	};

	return (
		<>
			<motion.button
				className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
				onClick={toggleNavHandler}
				aria-label='hamburger button'>
				<div className={styles.hamburger__box}>
					<motion.span animate={{ y: isActive ? 7 : 0, rotate: isActive ? 45 : 0 }}></motion.span>
					<motion.span animate={{ opacity: isActive ? 0 : 1 }}></motion.span>
					<motion.span animate={{ y: isActive ? -7 : 0, rotate: isActive ? -45 : 0 }}></motion.span>
				</div>
			</motion.button>
			<AnimatePresence>
				{isActive && (
					<motion.div
						className={styles['nav__items']}
						initial={{ opacity: 0, x: '90%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '90%' }}>
						<NavLink
							to='pricing'
							onClick={closeNavHandler}
							className={({ isActive }) => (isActive ? styles.active : '')}>
							Pricing
						</NavLink>
						<NavLink
							to='about'
							onClick={closeNavHandler}
							className={({ isActive }) => (isActive ? styles.active : '')}>
							About
						</NavLink>
						<NavLink
							to='contact'
							onClick={closeNavHandler}
							className={({ isActive }) => (isActive ? styles.active : '')}>
							Contact
						</NavLink>
						<DemoButton
							type='button'
							className={styles['nav__items-button']}
							onClick={navigateHandler}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavigationLinks;
