import { ActionFunction, Form, json, useNavigation } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './ContactForm.module.css';
import useInput from '../../hooks/use-input';

const reg =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm: React.FC = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	const {
		enteredValue: enteredName,
		inputValueHandler: nameInputValueHandler,
		inputBlurHandler: nameInputBlurHandler,
		isValid: nameIsValid,
		hasError: nameHasError,
		reset: nameInputReset,
	} = useInput((value) => value.trim().length > 2);

	const {
		enteredValue: enteredEmail,
		inputValueHandler: emailInputValueHandler,
		inputBlurHandler: emailInputBlurHandler,
		isValid: emailIsValid,
		hasError: emailHasError,
		reset: emailInputReset,
	} = useInput((value) => reg.test(value));

	const {
		enteredValue: enteredCompany,
		inputValueHandler: companyInputValueHandler,
		inputBlurHandler: companyInputBlurHandler,
		isValid: companyIsValid,
		hasError: companyHasError,
		reset: companyInputReset,
	} = useInput((value) => value.trim().length > 0);

	const {
		enteredValue: enteredTitle,
		inputValueHandler: titleInputValueHandler,
		inputBlurHandler: titleInputBlurHandler,
		isValid: titleIsValid,
		hasError: titleHasError,
		reset: titleInputReset,
	} = useInput((value) => value.trim().length > 3);

	const {
		enteredValue: enteredMessage,
		inputValueHandler: messageInputValueHandler,
		inputBlurHandler: messageInputBlurHandler,
		isValid: messageIsValid,
		hasError: messageHasError,
		reset: messageInputReset,
	} = useInput((value) => value.trim().length > 12);

	let formIsValid: boolean;

	if (!nameIsValid || !emailIsValid || !companyIsValid || !titleIsValid || !messageIsValid) {
		formIsValid = false;
	} else {
		formIsValid = true;
	}

	const submitHandler = (event: React.FormEvent) => {
		if (!formIsValid) {
			event.preventDefault();
			nameInputBlurHandler();
			emailInputBlurHandler();
			companyInputBlurHandler();
			titleInputBlurHandler();
			messageInputBlurHandler();
			return;
		}

		nameInputReset();
		emailInputReset();
		companyInputReset();
		titleInputReset();
		messageInputReset();
	};

	return (
		<Form
			preventScrollReset={true}
			onSubmit={submitHandler}
			method='post'
			className={styles.form}>
			<div className={`${styles.form__actions} ${nameHasError ? styles.invalid : ''}`}>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Name'
					value={enteredName}
					onChange={nameInputValueHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameHasError && <p>This field can’t be empty</p>}
			</div>
			<div className={`${styles.form__actions} ${emailHasError ? styles.invalid : ''}`}>
				<label htmlFor='email'></label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Email Address'
					value={enteredEmail}
					onChange={emailInputValueHandler}
					onBlur={emailInputBlurHandler}
				/>
				{emailHasError && <p>Please enter a valid email</p>}
			</div>
			<div className={`${styles.form__actions} ${companyHasError ? styles.invalid : ''}`}>
				<label htmlFor='company'></label>
				<input
					type='text'
					id='company'
					name='company'
					placeholder='Company Name'
					value={enteredCompany}
					onChange={companyInputValueHandler}
					onBlur={companyInputBlurHandler}
				/>
				{companyHasError && <p>This field can’t be empty</p>}
			</div>
			<div className={`${styles.form__actions} ${titleHasError ? styles.invalid : ''}`}>
				<label htmlFor='title'></label>
				<input
					type='text'
					id='title'
					name='title'
					placeholder='Title'
					value={enteredTitle}
					onChange={titleInputValueHandler}
					onBlur={titleInputBlurHandler}
				/>
				{titleHasError && <p>This field can’t be empty</p>}
			</div>
			<div className={`${styles.form__actions} ${messageHasError ? styles.invalid : ''}`}>
				<label htmlFor='message'></label>
				<textarea
					id='message'
					name='message'
					placeholder='Message'
					value={enteredMessage}
					onChange={messageInputValueHandler}
					onBlur={messageInputBlurHandler}
				/>
				{messageHasError && <p>This field can’t be empty</p>}
			</div>
			<div className={styles.check}>
				<input
					type='checkbox'
					id='check'
					name='check'
				/>
				<label htmlFor='check'>Stay up-to-date with company announcements and updates to our API</label>
			</div>
			<Button
				type='submit'
				disabled={isSubmitting}>
				{isSubmitting ? 'Submitting..' : 'Submit'}
			</Button>
		</Form>
	);
};

export default ContactForm;

export const action: ActionFunction = async ({ request }) => {
	const data = await request.formData();

	const messageData = {
		name: data.get('name'),
		email: data.get('email'),
		company: data.get('company'),
		title: data.get('title'),
		message: data.get('message'),
		subscription: data.get('check') ? true : false,
	};

	const response = await fetch('https://payapi-12de9-default-rtdb.firebaseio.com/messages.json', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(messageData),
	});

	if (!response.ok) {
		throw json({ message: 'Could not send message.', status: 500 });
	}

	return null;
};
