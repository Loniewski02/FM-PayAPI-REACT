import { ReactNode } from 'react';

import styles from './Button.module.css';

type Props = {
	children: ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	isBlack?: boolean;
	type: 'submit' | 'reset' | 'button';
	disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, onClick, isBlack, type, disabled }) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${isBlack ? styles.black : ''}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};
export default Button;
