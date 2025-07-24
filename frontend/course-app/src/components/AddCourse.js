import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Container, Button, Card, CardBody } from 'reactstrap';
import base_url from '../course_api';

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});
    const navigate = useNavigate(); 

    const handleForm = (e) => {
        postDatatoServer(course);
        e.preventDefault();
    };

    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                setCourse({ id: "", title: "", description: "" });
                navigate('/');
            },
            (error) => {
                // handle error
            }
        );
    };

    return (
        <Container style={{ maxWidth: 600, margin: '0 auto' }}>
            <Card style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', marginTop: 24 }}>
                <CardBody style={{ padding: '40px 32px' }}>
                    <h2 style={{ fontWeight: 700, color: '#1976d2', marginBottom: 24, textAlign: 'center' }}>
                        Add a New Course
                    </h2>
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <Label for="userId">Course ID</Label>
                            <Input
                                type="text"
                                placeholder="Enter the course id"
                                name="userId"
                                id="userId"
                                value={course.id || ''}
                                onChange={(e) => {
                                    setCourse({ ...course, id: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Course Title</Label>
                            <Input
                                type="text"
                                placeholder="Enter your title here."
                                id="title"
                                value={course.title || ''}
                                onChange={(e) => {
                                    setCourse({ ...course, title: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Course Description</Label>
                            <Input
                                type="textarea"
                                placeholder="Enter your description here."
                                id="description"
                                style={{ height: 120 }}
                                value={course.description || ''}
                                onChange={(e) => {
                                    setCourse({ ...course, description: e.target.value })
                                }}
                            />
                        </FormGroup>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
                            <Button type="submit" color="primary" style={{ minWidth: 120, fontWeight: 600 }}>Add Course</Button>
                            <Button
                                type="reset"
                                onClick={() => {
                                    setCourse({ id: "", title: "", description: "" });
                                }}
                                color="secondary"
                                style={{ minWidth: 100 }}
                            >Clear</Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default AddCourse;