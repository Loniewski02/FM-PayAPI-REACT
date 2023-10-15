import Wrapper from '../layout/Wrapper';
import styles from './AboutSection.module.css';

type Props = {
	title: string;
	text: string;
	isLast?: boolean;
};

const AboutSection: React.FC<Props> = ({ title, text, isLast }) => {
	return (
		<section className={`${styles['about']} ${isLast ? styles.last : ''}`}>
			<Wrapper className={styles.about__wrapper}>
				<h3>{title}</h3>
				<p>{text}</p>
			</Wrapper>
		</section>
	);
};

export default AboutSection;
