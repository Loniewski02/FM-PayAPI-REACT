import { json, useLoaderData } from 'react-router-dom';

import Wrapper from '../layout/Wrapper';
import DataBox from './DataBox';

import styles from './DataSection.module.css';

const DataSection: React.FC = () => {
	const data = useLoaderData() as { id: string; title: string; number: number }[];

	return (
		<section className={styles.data}>
			<Wrapper className={styles.data__wrapper}>
				{data.map((item) => (
					<DataBox
						key={item.id}
						title={item.title}
						number={item.number}
					/>
				))}
			</Wrapper>
		</section>
	);
};

export default DataSection;

export const loader = async () => {
	const response = await fetch('https://payapi-12de9-default-rtdb.firebaseio.com/data.json');

	if (!response.ok) {
		throw json({ message: 'Failed to fetch data.' }, { status: 500 });
	}

	const data = await response.json();

	return data;
};
