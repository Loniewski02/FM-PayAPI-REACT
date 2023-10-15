import Brands from '../UI/Brands';
import Wrapper from '../layout/Wrapper';
import ContactForm from './ContactForm';

import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
	return (
		<section className={styles.contact}>
			<Wrapper className={styles.contact__wrapper}>
				<ContactForm></ContactForm>
				<div className={styles['brands-box']}>
					<h3>Join the thousands of innovators already building with us</h3>
					<Brands isDark={true} />
				</div>
			</Wrapper>
		</section>
	);
};

export default ContactSection;
