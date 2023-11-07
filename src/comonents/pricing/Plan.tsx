import { motion } from 'framer-motion';

import Button from '../UI/Button';
import PlanItem from './PlanItem';

import styles from './Plan.module.css';

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
		<motion.div
			className={styles.plan}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1, transition: { type: 'spring' } }}>
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
		</motion.div>
	);
};

export default Plan;
