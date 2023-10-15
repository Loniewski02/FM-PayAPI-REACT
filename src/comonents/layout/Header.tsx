import Wrapper from './Wrapper';

import circleBg from '../../assets/shared/desktop/bg-pattern-circle.svg';
import styles from './Header.module.css';

type Props = { title: string; short?: boolean };

const Header: React.FC<Props> = ({ title, short }) => {
	return (
		<header className={styles.header}>
			<Wrapper className={`${short ? styles.header__wrapper : ''}`}>
				<h2>{title}</h2>
				<img
					src={circleBg}
					alt=''
					className={styles.circle}
				/>
			</Wrapper>
		</header>
	);
};

export default Header;
