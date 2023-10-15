import ContactSection from '../comonents/contact/ContactSection';
import Header from '../comonents/layout/Header';

const ContactPage: React.FC = () => {
	return (
		<>
			<Header title='Submit a help request and we’ll get in touch shortly.' />
			<ContactSection></ContactSection>
		</>
	);
};

export default ContactPage;
