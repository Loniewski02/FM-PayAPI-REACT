import styles from './Benefit.module.css';

type Props = {
	img: string;
	title: string;
	text: string;
};

const Benefit: React.FC<Props> = ({ img, title, text }) => {
	return (
		<div className={styles.benefit}>
			<img
				src={img}
				alt=''
			/>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};

export default Benefit;
