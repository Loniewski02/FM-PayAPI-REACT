import { ReactNode } from 'react';

import styles from './Wrapper.module.css';

type Props = { children: ReactNode; className?: string };

const Wrapper: React.FC<Props> = ({ children, className }) => {
	return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default Wrapper;
