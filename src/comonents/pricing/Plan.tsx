import Button from '../UI/Button';

import styles from './Plan.module.css';
import PlanItem from './PlanItem';

type Props = {
	title: string;
	id: string;
	description: string;
	price: number;
	items: Items[];
};

type Items = {
	title: string;
	value: boolean;
};

const sendData = (id: string) => {
	console.log('sending request for plan: ' + id);
	return id;
};

const Plan: React.FC<Props> = ({ title, description, price, id, items }) => {
	return (
		<div className={styles.plan}>
			<h3>{title}</h3>
			<p className={styles.plan__text}>{description}</p>
			<p className={styles.plan__price}>${price.toFixed(2)}</p>
			<ul>
				{items.map((item) => (
					<PlanItem
						key={item.title}
						isAvailable={item.value}>
						{item.title}
					</PlanItem>
				))}
			</ul>
			<Button
				type='button'
				onClick={sendData.bind(null, id)}>
				Request Access
			</Button>
		</div>
	);
};

export default Plan;

