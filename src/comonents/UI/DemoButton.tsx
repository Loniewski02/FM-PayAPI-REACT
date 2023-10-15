import { motion } from 'framer-motion';

import styles from '../UI/DemoButton.module.css';

type Props = {
	className?: string;
	onClick?: () => void;
	type: 'button' | 'submit' | 'reset';
};

const DemoButton: React.FC<Props> = ({ className, onClick, type }) => {
	return (
		<motion.button
			onClick={onClick}
			type={type}
			className={`${styles.button} ${className}`}
			whileHover={{ scale: 1.1 }}
			transition={{ type: 'spring', stiffness: 500 }}>
			Schdule a Demo
		</motion.button>
	);
};

export default DemoButton;
