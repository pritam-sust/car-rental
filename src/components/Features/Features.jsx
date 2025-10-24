import { Card, Col, Container, Row } from 'react-bootstrap';
import { FEATURES } from '../../utils/constants';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Travel Made Easy — Rent a Car with<br />
            Fox Anywhere, Anytime
          </h2>
        </div>

        <Row className="g-4 mb-4">
          {FEATURES.slice(0, 2).map((feature) => (
            <Col key={feature.id} md={6}>
              <Card className={styles.featureCard}>
                <Card.Body className={styles.cardBody}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <span style={{ color: feature.color, fontSize: '2.5rem' }}>
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.description}</p>
                  <a href="#learn" className={styles.learnMore}>{feature.link}</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="g-4">
          {FEATURES.slice(2).map((feature) => (
            <Col key={feature.id} md={4}>
              <Card className={styles.featureCardSmall}>
                <Card.Body className={styles.cardBodySmall}>
                  <div
                    className={styles.iconSmall}
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <span style={{ color: feature.color, fontSize: '2rem' }}>
                      {feature.icon}
                    </span>
                  </div>
                  <h5 className={styles.featureTitleSmall}>{feature.title}</h5>
                  <p className={styles.featureDescSmall}>{feature.description}</p>
                  <a href="#view" className={styles.learnMoreSmall}>{feature.link}</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;