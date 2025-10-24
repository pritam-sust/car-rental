import { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [subscribedEmails, setSubscribedEmails] = useLocalStorage('subscribedEmails', []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && !subscribedEmails.includes(email)) {
            setSubscribedEmails([...subscribedEmails, email]);
            setShowAlert(true);
            setEmail('');

            setTimeout(() => setShowAlert(false), 5000);
        }
    };

    return (
        <section className={styles.newsletter}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className={styles.newsletterCard}>
                            <h3 className={styles.title}>
                                🔔 Join Fox Hot Deals email & save more on your next rental
                            </h3>
                            <p className={styles.subtitle}>
                                Subscribe to get exclusive deals and offers delivered to your inbox
                            </p>

                            {showAlert && (
                                <Alert variant="success" className={styles.alert}>
                                    🎉 Successfully subscribed to Fox Hot Deals!
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit} className={styles.form}>
                                <Row className="g-3 align-items-center justify-content-center">
                                    <Col md={7}>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={styles.emailInput}
                                            required
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Button type="submit" className={styles.subscribeBtn}>
                                            Subscribe Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;
