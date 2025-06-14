package com.coursewebapp.service;

import com.coursewebapp.dao.CourseDAO;
import com.coursewebapp.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseServiceImplementation implements CourseService {

    @Autowired
    private CourseDAO courseDAO;

   //  List<Course> list;


    // Creating a list inside the default constructor.
    public  CourseServiceImplementation() {
//        list = new ArrayList<>();
//
//        list.add(new Course(223,"Computer Networks","Build your Networking Fundamentals From Stratch."));
//        list.add(new Course(521,"Cloud Computing","Start leveraging your Physical Resources- PAYG."));
//        list.add(new Course(624,"System Design","Construct a robust system which serves millions."));
//        list.add(new Course(992,"Data Structures & Algorithms","Organize & manage your data efficiently"));
    }

// To get all courses.
    @Override
    public List<Course> getCourses() {
        return courseDAO.findAll();
    }

    // To get single course using course ID.
    @Override
    public Course getCourse(long courseId) {
//        Course c = null;
//        for(Course course:list)
//        {
//            if(course.getId() == courseId)
//            {
//                c = course;
//                break;
//            }
//        }
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
//        list.forEach(e -> {
//            if (e.getId() == course.getId()) {
//                e.setTitle(course.getTitle());
//                e.setDescription(course.getDescription());
//            }
//
//        });
//        courseDAO.save(course);
 //       return course;

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
     //   list = this.list.stream().filter(e->e.getId() != parseLong).collect(Collectors.toList());
     Course entity = courseDAO.getReferenceById(parseLong);
     courseDAO.delete(entity);
    }
}
