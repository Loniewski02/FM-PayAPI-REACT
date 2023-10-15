import { Outlet, useNavigation, ScrollRestoration } from 'react-router-dom';

import MainNavigation from '../comonents/navigation/MainNavigation';
import SubscribeSection from '../comonents/layout/SubscribeSection';
import Footer from '../comonents/layout/Footer';
import LoadingIndicator from '../comonents/UI/LoadingIndicator';

const RootLayout = () => {
	const navigation = useNavigation();

	return (
		<>
			{navigation.state === 'loading' && <LoadingIndicator />}
			<MainNavigation />
			<main>
				<Outlet />
				<SubscribeSection />
			</main>
			<Footer />
			<ScrollRestoration />
		</>
	);
};

export default RootLayout;
