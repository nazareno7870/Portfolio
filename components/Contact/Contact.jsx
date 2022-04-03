import styles from '../../styles/Home.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import gmailIcon from '../../public/assets/Contact/gmail.svg'
import linkedinIcon from '../../public/assets/Contact/linkedin.svg'
import Image from 'next/image';

const Contact = ({lang}) => {

    return (
        <section className={styles.section}>
            <div className={styles.title} id="contact">
                <h2>{lang['contact.title']}</h2>
            </div>

            <Formik
                initialValues={{ email: '', name: '', message: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.message) {
                        errors.message = 'Required';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    fetch("/api/contact", {
                        method: "POST",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: values.name,
                            email: values.email,
                            text: values.message,
                        }),
                    }).then(() => {
                        NotificationManager.success('Message sent successfully', 'Success', 3000);
                        resetForm();
                        setSubmitting(false);
                    });
                }}

            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <Field type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" />
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="textarea" name="message" placeholder="Message" as="textarea" />
                        <ErrorMessage name="message" component="div" className={styles.error} />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <NotificationContainer />
            <div className={styles.contact}>
                <h5>Or write me</h5>

                <a href="mailto:nazareno7870@gmail.com" Target="_blank">
                    <Image
                        src={gmailIcon}
                        alt="@nazareno7870"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                    nazareno7870@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/nazarenodelrio/" Target="_blank">
                    <Image
                        src={linkedinIcon}
                        alt="@nazareno7870"
                        className={styles.socialIcon}
                        width={32}
                        height={32}
                    />
                    /nazarenodelrio
                </a>

            </div>
        </section>
    );
}

export default Contact;