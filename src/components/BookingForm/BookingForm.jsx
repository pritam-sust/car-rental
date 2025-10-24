import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useBooking } from '../../hooks/useBooking';
import styles from './BookingForm.module.css';

const BookingForm = () => {
    const {
        booking,
        updatePickupLocation,
        updateReturnLocation,
        updatePickupDate,
        updateReturnDate,
        updatePickupTime,
        updateReturnTime,
        updateDifferentLocation,
        searchVehicles,
    } = useBooking();

    const handleSubmit = (e) => {
        e.preventDefault();
        searchVehicles();
    };

    return (
        <Container className={styles.container}>
            <Card className={styles.formCard}>
                <Card.Body className={styles.cardBody}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Reserve budget-friendly car today!</h2>
                        <p className={styles.subtitle}>🎯 Book today, save up to 30% off your car rental</p>
                    </div>

                    <Form onSubmit={handleSubmit}>
                        <Row className="g-3 mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className={styles.label}>📍 Pick-up Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter location"
                                        value={booking.pickupLocation}
                                        onChange={(e) => updatePickupLocation(e.target.value)}
                                        className={styles.formControl}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Check
                                    type="checkbox"
                                    label="Return to a different location"
                                    className={styles.checkbox}
                                    checked={booking.differentLocation}
                                    onChange={(e) => updateDifferentLocation(e.target.checked)}
                                />
                            </Col>
                        </Row>

                        <Row className="g-3 mb-4">
                            <Col md={3} sm={6}>
                                <Form.Group>
                                    <Form.Label className={styles.label}>📅 Pick-up Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={booking.pickupDate}
                                        onChange={(e) => updatePickupDate(e.target.value)}
                                        className={styles.formControl}
                                        required
                                    />
                                    <Form.Text className="text-muted">Mon, 16 Dec</Form.Text>
                                </Form.Group>
                            </Col>

                            <Col md={3} sm={6}>
                                <Form.Group>
                                    <Form.Label className={styles.label}>🕐 Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        value={booking.pickupTime}
                                        onChange={(e) => updatePickupTime(e.target.value)}
                                        className={styles.formControl}
                                        required
                                    />
                                    <Form.Text className="text-muted">10:00 AM</Form.Text>
                                </Form.Group>
                            </Col>

                            <Col md={3} sm={6}>
                                <Form.Group>
                                    <Form.Label className={styles.label}>📅 Return Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={booking.returnDate}
                                        onChange={(e) => updateReturnDate(e.target.value)}
                                        className={styles.formControl}
                                        required
                                    />
                                    <Form.Text className="text-muted">Thu, 19 Dec</Form.Text>
                                </Form.Group>
                            </Col>

                            <Col md={3} sm={6}>
                                <Form.Group>
                                    <Form.Label className={styles.label}>🕐 Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        value={booking.returnTime}
                                        onChange={(e) => updateReturnTime(e.target.value)}
                                        className={styles.formControl}
                                        required
                                    />
                                    <Form.Text className="text-muted">10:00 AM</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="text-center">
                            <Button
                                type="submit"
                                className={styles.searchBtn}
                                disabled={booking.isLoading}
                            >
                                {booking.isLoading ? 'Searching...' : 'Search Vehicles'}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BookingForm;