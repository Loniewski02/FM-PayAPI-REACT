import { ReactNode } from 'react';
import checkIco from '../../assets/shared/desktop/icon-check.svg';

import styles from './PlanItem.module.css';

type Props = { children: ReactNode; isAvailable: boolean };

const PlanItem: React.FC<Props> = ({ children, isAvailable }) => {
	return (
		<li className={`${styles.item} ${isAvailable ? '' : styles.disabled}`}>
			<img
				src={checkIco}
				alt='available'
			/>
			{children}
		</li>
	);
};

export default PlanItem;
