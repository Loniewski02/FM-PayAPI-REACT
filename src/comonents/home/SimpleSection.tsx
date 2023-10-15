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
				<img
					className={`${styles.img} ${isReverse ? styles.reverse : ''}`}
					src={img}
					alt=''
				/>
				<div className={styles.info}>
					<h2>{title}</h2>
					<p>{text}</p>
				</div>
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
