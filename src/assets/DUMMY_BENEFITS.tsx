import bankingIco from './home/desktop/icon-banking-and-coverage.svg';
import consumerIco from './home/desktop/icon-consumer-payments.svg';
import financesIco from './home/desktop/icon-personal-finances.svg';

export const DUMMY_BENEFITS = [
	{
		id: 'b1',
		icon: financesIco,
		title: 'Personal Finances',
		text: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
	},
	{
		id: 'b2',
		icon: bankingIco,
		title: 'Banking & Coverage',
		text: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
	},
	{
		id: 'b3',
		icon: consumerIco,
		title: 'Consumer Payments',
		text: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
	},
];
