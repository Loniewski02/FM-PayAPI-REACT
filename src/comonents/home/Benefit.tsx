import { motion } from 'framer-motion';
import styles from './Benefit.module.css';

type Props = {
	img: string;
	title: string;
	text: string;
};

const Benefit: React.FC<Props> = ({ img, title, text }) => {
	return (
		<motion.div
			className={styles.benefit}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1, transition: { type: 'spring' } }}>
			<img
				src={img}
				alt=''
			/>
			<h3>{title}</h3>
			<p>{text}</p>
		</motion.div>
	);
};

export default Benefit;
