import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Reviews.module.css';

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews = [
        {
            id: 1,
            name: 'Sarah M.',
            location: 'Los Angeles, CA',
            rating: 5,
            text: 'Excellent service and great prices. The car was clean and well-maintained. Highly recommend Fox for car rentals! The booking process was seamless.',
            avatar: '👩',
            platform: 'TrustPilot'
        },
        {
            id: 2,
            name: 'Michael R.',
            location: 'Miami, FL',
            rating: 5,
            text: 'Quick and easy booking process. Customer service was outstanding and helped me throughout my trip. Will definitely use Fox again!',
            avatar: '👨',
            platform: 'Yelp'
        },
        {
            id: 3,
            name: 'Jennifer L.',
            location: 'San Diego, CA',
            rating: 5,
            text: 'Best car rental experience I have had. Great value for money and excellent customer support. The staff was very friendly and professional.',
            avatar: '👩',
            platform: 'Google'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <section className={styles.reviews}>
            <Container>
                <h2 className={styles.title}>
                    Our exceptional reviews reflect our quality 🌟 service
                </h2>

                <Row className="justify-content-center">
                    {reviews.map((review, index) => (
                        <Col key={review.id} lg={4} md={6} className="mb-4">
                            <Card
                                className={`${styles.reviewCard} ${index === currentReview ? styles.active : ''
                                    }`}
                            >
                                <Card.Body>
                                    <div className={styles.reviewHeader}>
                                        <div className={styles.avatar}>{review.avatar}</div>
                                        <div className={styles.reviewerInfo}>
                                            <h5 className={styles.reviewerName}>{review.name}</h5>
                                            <p className={styles.reviewerLocation}>{review.location}</p>
                                        </div>
                                    </div>

                                    <div className={styles.rating}>
                                        {'⭐'.repeat(review.rating)}
                                    </div>

                                    <p className={styles.reviewText}>{review.text}</p>

                                    <div className={styles.platform}>
                                        <span className={styles.platformName}>{review.platform}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Reviews;