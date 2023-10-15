import { motion } from 'framer-motion';
import brandIcons from '../../assets/shared/desktop/brandsIcons';
import styles from './Brands.module.css';

const Brands: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
	return (
		<ul className={`${styles.list} ${isDark ? styles.black : ''}`}>
			{brandIcons.map((icon) => (
				<motion.li
					key={Math.random()}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1, transition: { type: 'spring' } }}>
					<img
						src={icon}
						alt=''
					/>
				</motion.li>
			))}
		</ul>
	);
};

export default Brands;
