import React, { useEffect } from "react";
import { Card, CardBody } from 'reactstrap';

const AboutMe = () => {
    return (
        <Card style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', marginTop: 24, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            <CardBody style={{ padding: '40px 32px' }}>
                <h2 style={{ fontWeight: 700, color: '#1976d2', marginBottom: 18 }}>About EduTrack Pro</h2>
                <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 18 }}>
                    EduTrack Pro is a professional course management system developed to streamline educational administration.
                </p>
                <div style={{ marginBottom: 18 }}>
                    <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 6 }}>Built with modern technologies:</div>
                    <ul style={{ paddingLeft: 20, color: '#333', marginBottom: 0 }}>
                        <li>React.js for the frontend</li>
                        <li>Spring Boot framework for the backend</li>
                        <li>MySQL for database persistence</li>
                    </ul>
                </div>
                <div>
                    <div style={{ fontWeight: 600, color: '#1976d2', marginBottom: 6 }}>Key Features</div>
                    <ul style={{ paddingLeft: 20, color: '#333', marginBottom: 0 }}>
                        <li>Comprehensive course management</li>
                        <li>Intuitive user interface</li>
                        <li>Secure data handling</li>
                        <li>Real-time updates</li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
};

const AboutMePage = () => {
    useEffect(() => {
        document.title = "About Me";
    }, []);

    return <AboutMe />;
};

export default AboutMePage;
