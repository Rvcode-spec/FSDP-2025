"use client";

import React, { useEffect, useState } from "react";
import SearchAndFilter from './SearchAndFilter';
import CourseCard from './CourseCard';
import CourseSkeleton from './CourseSkeleton';

export default function CoursesSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5050/courses");
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <SearchAndFilter />

      <div className="min-h-screen w-full from-gray-500 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <CourseSkeleton key={i} />)
              : courses.map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
