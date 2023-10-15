import { useRouteError } from 'react-router-dom'; // Upewnij się, że importujesz redirect

import ErrorSection from '../comonents/layout/ErrorSection.tsx';
import MainNavigation from '../comonents/navigation/MainNavigation.tsx';
import Footer from '../comonents/layout/Footer.tsx';

const ErrorPage: React.FC = () => {
	const error = useRouteError() as { status: number; data: { message: string } };

	let title = 'An error occurred';
	let message = 'Something went wrong';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'Page Not Found!';
		message = 'Could not find resource or page.';
	}

	return (
		<>
			<MainNavigation />
			<main>
				<ErrorSection
					title={title}
					message={message}
				/>
			</main>
			<Footer />
		</>
	);
};

export default ErrorPage;
