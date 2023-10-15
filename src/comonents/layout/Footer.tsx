import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/shared/desktop/logo-white.svg';
import Wrapper from './Wrapper';

import facebookIcon from '../../assets/shared/desktop/facebook.svg';
import twitterIcon from '../../assets/shared/desktop/twitter.svg';
import linkedinIcon from '../../assets/shared/desktop/linkedin.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper className={styles.footer__wrapper}>
				<Link
					to='/'
					aria-label='home'>
					<img
						src={logo}
						alt=''
					/>
				</Link>
				<nav className={styles.footer__nav}>
					<NavLink
						to='pricing'
						className={({ isActive }) => (isActive ? styles.active : '')}>
						Pricing
					</NavLink>
					<NavLink
						to='about'
						className={({ isActive }) => (isActive ? styles.active : '')}>
						About
					</NavLink>
					<NavLink
						to='contact'
						className={({ isActive }) => (isActive ? styles.active : '')}>
						Contact
					</NavLink>
				</nav>
				<div className={styles.footer__socials}>
					<a
						href='https://www.facebook.com/'
						aria-label='facebook'>
						<img
							src={facebookIcon}
							alt=''
						/>
					</a>
					<a
						href='https://twitter.com/'
						aria-label='twitter'>
						<img
							src={twitterIcon}
							alt=''
						/>
					</a>
					<a
						href='https://www.linkedin.com/'
						aria-label='linkedin'>
						<img
							src={linkedinIcon}
							alt=''
						/>
					</a>
				</div>
			</Wrapper>
		</footer>
	);
};

export default Footer;
