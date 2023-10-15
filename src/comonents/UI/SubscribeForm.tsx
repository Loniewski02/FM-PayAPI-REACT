import { useState } from 'react';
import { Form } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import useInput from '../../hooks/use-input';
import DemoButton from '../UI/DemoButton';

import styles from './SubscribeForm.module.css';

const reg =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SubscribeForm: React.FC<{ id?: string }> = ({ id }) => {
	const [succes, setSucces] = useState(false);
	const { enteredValue, isValid, hasError, inputBlurHandler, inputValueHandler, reset } = useInput((value) =>
		reg.test(value)
	);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (!isValid) {
			setSucces(false);
			inputBlurHandler();
			return;
		}
		//sending data...
		setSucces(true);

		reset();
	};

	return (
		<Form
			className={`${styles.form} ${hasError ? styles.invalid : ''}`}
			onSubmit={handleSubmit}>
			<label htmlFor={`${id ? id : 'email'}`}></label>
			<input
				type='text'
				id={`${id ? id : 'email'}`}
				placeholder='Enter email address'
				onChange={inputValueHandler}
				onBlur={inputBlurHandler}
				value={enteredValue}
			/>
			<AnimatePresence>
				{hasError && (
					<motion.p
						className={styles['error-text']}
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}>
						Please enter a valid email.
					</motion.p>
				)}
				{succes && !hasError && (
					<motion.p
						className={styles.success}
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -30 }}>
						Success!
					</motion.p>
				)}
			</AnimatePresence>
			<DemoButton
				className={styles['header__info-form-button']}
				type='submit'
			/>
		</Form>
	);
};

export default SubscribeForm;

export const action = async () => {};
