package com.coursewebapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursewebapp.dao.CourseDAO;
import com.coursewebapp.entities.Course;

@Service
public class CourseServiceImplementation implements CourseService {

    @Autowired
    private CourseDAO courseDAO;

   //  List<Course> list;


    // Creating a list inside the default constructor.
    public  CourseServiceImplementation() {
//        list = new ArrayList<>();

    }

// To get all courses.
    @Override
    public List<Course> getCourses() {
        return courseDAO.findAll();
    }

    // To get single course using course ID.
    @Override
    public Course getCourse(long courseId) {
//     
        return courseDAO.getReferenceById(courseId);
    }

    // To add new course.
    @Override
    public Course addCourse(Course course) {
       // list.add(course);
        courseDAO.save(course);
        return course;
    }

    // Update Course
    @Override
    public Course updateCourse(Course course) {
//        

        // Handling corner case, if the course you're trying to update doesn't exist in the DB, it will throw error.
        if(courseDAO.existsById(course.getId())) {
            return courseDAO.save(course);
        } else {
            throw new RuntimeException("Course with ID" + course.getId() + "does not exist");
        }

    }

    // Delete Course.
    @Override
    public void deleteCourse(long parseLong) {

     Course entity = courseDAO.getReferenceById(parseLong);
     courseDAO.delete(entity);
    }
}
