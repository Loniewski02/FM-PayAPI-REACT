import styles from './DataBox.module.css';

type Props = {
	title: string;
	number: number;
};

const DataBox: React.FC<Props> = ({ title, number }) => {
	let numberString = number.toString();

	if (number > 100 && number < 1000) {
		numberString = numberString.slice(0, 1) + '00+';
	} else if (number > 1000 && number < 10000) {
		numberString = numberString.slice(0, 2) + '00+';
	} else if (number > 10000 && number < 100000) {
		numberString = numberString.slice(0, 2) + 'K+';
	} else if (number > 100000 && number < 1000000) {
		numberString = numberString.slice(0, 2) + '0K+';
	} else if (number > 1000000 && number < 10000000) {
		numberString = numberString.slice(0, 1) + 'M+';
	} else if (number > 10000000) {
		numberString = numberString.slice(0, 2) + 'M+';
	}

	return (
		<div className={styles.box}>
			<p>{title}</p>
			<p>{numberString}</p>
		</div>
	);
};

export default DataBox;
