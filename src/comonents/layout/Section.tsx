import { ReactNode } from 'react';

import styles from './Section.module.css';

type Props = {
	children: ReactNode;
	className?: string;
	isFirst?: boolean;
	isLast?: boolean;
};

const Section: React.FC<Props> = ({ children, className, isFirst, isLast }) => {
	const classes = `${styles.section} ${isFirst ? styles.first : ''} ${isFirst ? styles.first : ''} ${
		isLast ? styles.last : ''
	} ${className}`;

	return <section className={classes}>{children}</section>;
};

export default Section;
