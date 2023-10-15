import SubscribeForm from '../UI/SubscribeForm';

import styles from './SubscribeSection.module.css';
import Wrapper from './Wrapper';

const SubscribeSection: React.FC = () => {
	return (
		<section
			className={styles.subscribe}
			id='subscribe'>
			<Wrapper className={styles['subscribe__wrapper']}>
				<h2>Ready to start?</h2>
				<SubscribeForm />
			</Wrapper>
		</section>
	);
};

export default SubscribeSection;
