import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
    const footerLinks = {
        'Follow Us': [
            { name: 'Facebook', icon: '📘', url: '#' },
            { name: 'Twitter', icon: '🐦', url: '#' },
            { name: 'Instagram', icon: '📷', url: '#' },
            { name: 'LinkedIn', icon: '💼', url: '#' }
        ],
        'Programs': [
            'Fox Rewards',
            'Last Minute Deals',
            'Rental Car Program',
            'One Way Rentals',
            'Long Term Rentals'
        ],
        'About Us': [
            'Careers',
            'Company Info',
            'Investor Relations',
            'Press Center',
            'Sustainability'
        ],
        'Customer Service': [
            'Contact Us',
            'Help & Support',
            'Rental Locations',
            'FAQ & Rentals',
            'Rental Policies'
        ]
    };

    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="g-4">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <Col key={category} lg={3} md={6} sm={6}>
                            <h5 className={styles.footerTitle}>{category}</h5>
                            <ul className={styles.footerList}>
                                {links.map((link, index) => (
                                    <li key={index} className={styles.footerItem}>
                                        {typeof link === 'object' ? (
                                            <a href={link.url} className={styles.footerLink}>
                                                <span className={styles.linkIcon}>{link.icon}</span> {link.name}
                                            </a>
                                        ) : (
                                            <a href="#" className={styles.footerLink}>{link}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    ))}
                </Row>

                <hr className={styles.divider} />

                <Row className="align-items-center">
                    <Col md={6} className="mb-3 mb-md-0">
                        <div className={styles.privacy}>
                            <span className={styles.privacyIcon}>🔒</span>
                            Do not sell or share my personal information
                        </div>
                    </Col>
                    <Col md={6} className="text-md-end text-center">
                        <Button className={styles.requestBtn}>
                            Get Protection Request
                        </Button>
                    </Col>
                </Row>

                <div className={styles.copyright}>
                    <p>© 2024 Fox Rent A Car - All Rights Reserved</p>
                    <div className={styles.copyrightLinks}>
                        <a href="#" className={styles.copyrightLink}>Privacy Policy</a>
                        <span className={styles.separator}>|</span>
                        <a href="#" className={styles.copyrightLink}>Terms of Service</a>
                        <span className={styles.separator}>|</span>
                        <a href="#" className={styles.copyrightLink}>Cookie Policy</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
