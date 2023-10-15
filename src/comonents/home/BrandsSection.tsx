import { useNavigate } from 'react-router-dom';

import Wrapper from '../layout/Wrapper';
import Button from '../UI/Button';
import Brands from '../UI/Brands';

import styles from './BrandsSection.module.css';

const BrandsSection: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/about');
	};

	return (
		<section className={styles.brands}>
			<Wrapper className={styles['brands__wrapper']}>
				<Brands />
				<div className={styles['brands__info']}>
					<h2>Who we work with</h2>
					<p>
						Today, millions of people around the world have successfully connected their accounts to apps they love
						using our API. We provide developers with the tools they need to create easy and accessible experiences for
						their users.
					</p>
					<Button
						type='button'
						onClick={handleClick}
						isBlack={true}>
						About Us
					</Button>
				</div>
			</Wrapper>
		</section>
	);
};

export default BrandsSection;
