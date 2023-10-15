import brandIcons from '../../assets/shared/desktop/brandsIcons';
import styles from './Brands.module.css';

const Brands: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
	return (
		<ul className={`${styles.list} ${isDark ? styles.black : ''}`}>
			{brandIcons.map((icon) => (
				<li key={Math.random()}>
					<img
						src={icon}
						alt=''
					/>
				</li>
			))}
		</ul>
	);
};

export default Brands;
