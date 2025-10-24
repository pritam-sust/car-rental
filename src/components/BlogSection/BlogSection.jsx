import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './BlogSection.module.css';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Exploring Colorado\'s Natural Wonders - The Ultimate Road Trip Itinerary',
            image: '🏔️',
            category: 'Travel Guide',
            readTime: '8 min read',
            color: '#667eea'
        },
        {
            id: 2,
            title: 'What to Expect When Renting a Luxury Car from Fox',
            image: '🚗',
            category: 'Car Rental',
            readTime: '5 min read',
            color: '#764ba2'
        },
        {
            id: 3,
            title: 'Top Tips from Fox on How to Organize Business Travel',
            image: '💼',
            category: 'Business',
            readTime: '6 min read',
            color: '#f093fb'
        }
    ];

    return (
        <section className={styles.blogSection}>
            <Container>
                <h2 className={styles.title}>Looking for travel tips? Read our Blogs</h2>

                <Row className="g-4">
                    {blogPosts.map((post) => (
                        <Col key={post.id} lg={4} md={6}>
                            <Card className={styles.blogCard}>
                                <div
                                    className={styles.imageContainer}
                                    style={{ background: `linear-gradient(135deg, ${post.color}, #764ba2)` }}
                                >
                                    <div className={styles.imagePlaceholder}>{post.image}</div>
                                    <div className={styles.category}>{post.category}</div>
                                </div>
                                <Card.Body className={styles.cardBody}>
                                    <h4 className={styles.postTitle}>{post.title}</h4>
                                    <div className={styles.meta}>
                                        <span className={styles.readTime}>📖 {post.readTime}</span>
                                    </div>
                                    <Button variant="outline-primary" className={styles.readMore}>
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Button className={styles.viewAllBtn}>View All Blogs</Button>
                </div>
            </Container>
        </section>
    );
};

export default BlogSection;