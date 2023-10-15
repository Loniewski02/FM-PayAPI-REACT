import { json, useLoaderData } from 'react-router-dom';
import Wrapper from '../layout/Wrapper';
import Plan from './Plan';
import styles from './PlansSection.module.css';

const PlansSection: React.FC = () => {
	const plans = useLoaderData() as { title: string; id: string; description: string; price: number; items: [] }[];

	return (
		<section className={styles.plans}>
			<Wrapper className={styles.plans__wrapper}>
				{plans.map((plan) => (
					<Plan
						key={plan.id}
						id={plan.id}
						description={plan.description}
						title={plan.title}
						price={plan.price}
						items={plan.items}
					/>
				))}
			</Wrapper>
		</section>
	);
};

export default PlansSection;

export const loader = async () => {
	const response = await fetch('https://payapi-12de9-default-rtdb.firebaseio.com/plans.json');

	if (!response.ok) {
		throw json({ message: 'Failed to fetch data.' }, { status: 500 });
	}

	const data = await response.json();

	return data;
};
