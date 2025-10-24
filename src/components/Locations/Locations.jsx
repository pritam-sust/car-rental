import { Card, Col, Container, Row } from 'react-bootstrap';
import { LOCATIONS } from '../../utils/constants';
import styles from './Locations.module.css';

const Locations = () => {
    return (
        <section className={styles.locations}>
            <Container>
                <h2 className={styles.title}>Top USA car rental locations</h2>
                <Row className="g-4 justify-content-center">
                    {LOCATIONS.map((location) => (
                        <Col key={location.id} lg={2} md={4} sm={6} xs={6}>
                            <Card className={styles.locationCard}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imagePlaceholder}>📍</div>
                                </div>
                                <Card.Body className={styles.cardBody}>
                                    <h5 className={styles.locationName}>{location.name}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Locations;