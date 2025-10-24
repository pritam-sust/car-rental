import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './ProtectionBanner.module.css';

const ProtectionBanner = () => {
    return (
        <section className={styles.protectionBanner}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={8} md={7}>
                        <div className={styles.content}>
                            <div className={styles.icon}>🛡️</div>
                            <div className={styles.text}>
                                <h3 className={styles.title}>Cancel for Any Reason Protection</h3>
                                <p className={styles.description}>
                                    For complete peace of mind, add Cancel for Any Reason Protection for just $9 per day. Cancel up to one hour before your rental and receive a full refund.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={5} className="text-md-end text-center">
                        <Button className={styles.knowMore}>Know More</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProtectionBanner;