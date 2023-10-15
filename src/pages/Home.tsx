import SimpleSection from '../comonents/home/SimpleSection.tsx';
import HomeHeader from '../comonents/home/HomeHeader.tsx';

import implementImg from '../assets/home/desktop/illustration-easy-to-implement.png';
import UIImg from '../assets/home/desktop/illustration-simple-ui.png';
import BrandsSection from '../comonents/home/BrandsSection.tsx';
import BenefitsSection from '../comonents/home/BenefitsSection.tsx';

const HomePage: React.FC = () => {
	return (
		<>
			<HomeHeader />
			<BrandsSection />
			<SimpleSection
				isFirst={true}
				title='Easy to implement'
				text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
				img={implementImg}
			/>
			<SimpleSection
				isReverse={true}
				title='Simple UI & UX'
				text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. '
				img={UIImg}
			/>
			<BenefitsSection />
		</>
	);
};

export default HomePage;
