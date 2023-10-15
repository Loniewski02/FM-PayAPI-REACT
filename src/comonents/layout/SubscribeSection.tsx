import { motion } from 'framer-motion';
import SubscribeForm from '../UI/SubscribeForm';

import styles from './SubscribeSection.module.css';
import Wrapper from './Wrapper';

const SubscribeSection: React.FC = () => {
	return (
		<section
			className={styles.subscribe}
			id='subscribe'>
			<Wrapper className={styles['subscribe__wrapper']}>
				<motion.h2
					initial={{ opacity: 0, x: '-100%' }}
					whileInView={{ opacity: 1, x: 0, transition: { type: 'spring' } }}>
					Ready to start?
				</motion.h2>
				<SubscribeForm />
			</Wrapper>
		</section>
	);
};

export default SubscribeSection;
