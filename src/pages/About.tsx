import AboutSection from '../comonents/about/AboutSection';
import HeroSection from '../comonents/about/HeroSection';
import Header from '../comonents/layout/Header';
import DataSection from '../comonents/about/DataSection';

const AboutPage: React.FC = () => {
	return (
		<>
			<Header
				title='We empower innovators by delivering access to the financial system'
				short={true}
			/>
			<AboutSection
				title='Our Vision'
				text='Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. '
			/>
			<AboutSection
				title='Our Business'
				text='At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. '
			/>
			<HeroSection />
			<DataSection />
			<AboutSection
				title='The Culture'
				text="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
			/>
			<AboutSection
				isLast={true}
				title='The People'
				text=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
			/>
		</>
	);
};

export default AboutPage;