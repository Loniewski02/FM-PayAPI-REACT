import Wrapper from './Wrapper';

import circle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import styles from './ErrorSection.module.css';

const ErrorSection: React.FC<{ title: string; message: string }> = ({ title, message }) => {
	return (
		<section className={styles.error}>
			<Wrapper className={styles.error__wrapper}>
				<h1>{title}</h1>
				<p>{message}</p>
				<img
					src={circle}
					alt=''
					className={styles.circle}
				/>
			</Wrapper>
		</section>
	);
};

export default ErrorSection;
