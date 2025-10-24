import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className={styles.content}>
                        <h1 className={styles.title}>
                            Early Bird Savings<br />
                            <span className={styles.highlight}>Up to 20% OFF</span>
                        </h1>
                        <Button className={styles.cta}>
                            Reserve Your Car Now →
                        </Button>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.carImage}>
                            <div className={styles.placeholder}>🚗</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;