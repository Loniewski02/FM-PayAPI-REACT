import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PricingPage from './pages/Pricing';
import ContactPage from './pages/Contact';

import { loader as aboutLoader } from './comonents/about/DataSection';
import { loader as plansLoader } from './comonents/pricing/PlansSection';
import { action as sendingAction } from './comonents/contact/ContactForm';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'about',
				element: <AboutPage />,
				loader: aboutLoader,
			},
			{ path: 'pricing', element: <PricingPage />, loader: plansLoader },
			{ path: 'contact', element: <ContactPage />, action: sendingAction },
		],
	},
]);

const App: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default App;
