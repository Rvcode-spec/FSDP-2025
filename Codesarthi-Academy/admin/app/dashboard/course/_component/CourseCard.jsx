import React from "react";
import { Users, Clock, Star } from "lucide-react";

export default function CourseCard({ course = {} }) {
  // Provide default values to prevent undefined errors
  const {
    category = "General",
    title = "Course Title",
    instructor = "Instructor",
    students = "0",
    duration = "0 weeks",
    rating = "0.0",
    description = "Course description not available.",
    price = "0"
  } = course;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:-translate-y-1">
      {/* Course Image/Banner */}
      <div className="h-48 bg-gradient-to-br from-violet-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">{category}</span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{instructor}</p>
        </div>
      </div>

      {/* Course Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{students}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-violet-600">
            ${price}
          </div>
          <button className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors duration-200 font-medium">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}