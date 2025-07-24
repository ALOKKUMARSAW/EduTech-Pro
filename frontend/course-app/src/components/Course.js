import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Input,
    FormGroup,
    Form
} from "reactstrap";
import axios from "axios";
import base_url from "../course_api";

const Course = ({ course, updateCourse, update }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCourse, setUpdatedCourse] = useState(course);

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                alert("Course deleted successfully!");
                update(id);
            },
            (error) => {
                alert("Server problem, course was not able to delete successfully!");
            }
        );
    };

    const handleUpdateClick = () => {
        updateCourse(updatedCourse);
        setIsEditing(false);
    };

    return (
        <Card style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(25,118,210,0.07)', marginBottom: 0 }}>
            <CardBody>
                {isEditing ? (
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                value={updatedCourse.title}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, title: e.target.value })}
                                style={{ marginBottom: 12 }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                value={updatedCourse.description}
                                onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
                                style={{ minHeight: 80 }}
                            />
                        </FormGroup>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
                            <Button color="primary" onClick={handleUpdateClick}>Save</Button>
                            <Button color="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                        </div>
                    </Form>
                ) : (
                    <>
                        <CardTitle style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1976d2' }}>{course.title}</CardTitle>
                        <CardText style={{ color: '#444', marginBottom: 20 }}>{course.description}</CardText>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                            <Button color="warning" onClick={() => setIsEditing(true)}>Update</Button>
                            <Button color="danger" onClick={() => deleteCourse(course.id)}>Delete</Button>
                        </div>
                    </>
                )}
            </CardBody>
        </Card>
    );
}

export default Course;
