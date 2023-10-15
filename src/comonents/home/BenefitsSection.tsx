import Section from '../layout/Section';
import Wrapper from '../layout/Wrapper';

import Benefit from './Benefit';

import { DUMMY_BENEFITS } from '../../assets/DUMMY_BENEFITS';
import styles from './BenefitsSection.module.css';

const BenefitsSection: React.FC = () => {
	return (
		<Section isLast={true}>
			<Wrapper className={styles['benefits__wrapper']}>
				{/* {for SEO} */}
				<h2 className={styles['benefits__title']}>Benefits</h2>
				{DUMMY_BENEFITS.map((benefit) => (
					<Benefit
						key={benefit.id}
						img={benefit.icon}
						title={benefit.title}
						text={benefit.text}
					/>
				))}
			</Wrapper>
		</Section>
	);
};

export default BenefitsSection;
