import { NavLink, useNavigate } from 'react-router-dom';

import DemoButton from '../UI/DemoButton';

import styles from './DesktopNavLinks.module.css';

const DesktopNavLinks: React.FC = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate('#subscribe');
	};

	return (
		<div className={styles['nav__items']}>
			<NavLink
				to='pricing'
				className={({ isActive }) => (isActive ? styles.active : '')}
				end>
				Pricing
			</NavLink>
			<NavLink
				to='about'
				className={({ isActive }) => (isActive ? styles.active : '')}
				end>
				About
			</NavLink>
			<NavLink
				to='contact'
				className={({ isActive }) => (isActive ? styles.active : '')}>
				Contact
			</NavLink>
			<DemoButton
				type='button'
				className={styles['nav__items-button']}
				onClick={navigateHandler}
			/>
		</div>
	);
};

export default DesktopNavLinks;
