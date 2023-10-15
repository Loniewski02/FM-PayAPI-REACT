import { motion } from 'framer-motion';
import Wrapper from '../layout/Wrapper';
import Section from '../layout/Section';

import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import styles from './SimpleSection.module.css';

type Props = {
	img: string;
	title: string;
	text: string;
	isReverse?: boolean;
	isFirst?: boolean;
};

const SimpleSection: React.FC<Props> = ({ img, title, text, isReverse, isFirst }) => {
	return (
		<Section isFirst={isFirst}>
			<Wrapper className={styles['section__wrapper']}>
				<motion.img
					className={`${styles.img} ${isReverse ? styles.reverse : ''}`}
					src={img}
					alt=''
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{ opacity: 1, scale: 1, transition: { type: 'spring' } }}
				/>
				<motion.div
					className={styles.info}
					initial={{ opacity: 0, x: isReverse ? '-100%' : '100%' }}
					whileInView={{ opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } }}>
					<h2>{title}</h2>
					<p>{text}</p>
				</motion.div>
				{isReverse && (
					<img
						src={circle}
						alt=''
						className={styles.circle}
					/>
				)}
			</Wrapper>
		</Section>
	);
};

export default SimpleSection;
