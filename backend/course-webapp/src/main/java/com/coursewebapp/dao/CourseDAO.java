package com.coursewebapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coursewebapp.entities.Course;

public interface CourseDAO extends JpaRepository<Course, Long> {
}
