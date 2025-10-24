import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container>
                <Navbar.Brand href="#home" className={styles.brand}>
                    <span className={styles.logo}>fox</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
                        <Nav.Link href="#deals" className={styles.navLink}>Best Deals</Nav.Link>
                        <Nav.Link href="#locations" className={styles.navLink}>Locations</Nav.Link>
                        <Nav.Link href="#rewards" className={styles.navLink}>Fox Rewards</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#reservation" className={styles.navLink}>
                            🌐 Manage Reservation
                        </Nav.Link>
                        <Nav.Link href="#contact" className={styles.navLink}>
                            ☎️ US
                        </Nav.Link>
                        {isLoggedIn ? (
                            <Button variant="outline-light" className={styles.loginBtn}>
                                Profile
                            </Button>
                        ) : (
                            <Button variant="outline-light" className={styles.loginBtn}>
                                Login
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;