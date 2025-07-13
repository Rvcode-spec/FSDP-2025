 useEffect(() => {
    // Simulate API call with more detailed course data
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Next.js Mastery",
          instructor: "John Doe",
          category: "Web Development",
          students: "1.2k",
          duration: "12 weeks",
          rating: "4.8",
          price: "99",
          description: "Master Next.js from basics to advanced concepts. Build production-ready applications with server-side rendering, static generation, and API routes."
        },
        {
          id: 2,
          title: "React for Beginners",
          instructor: "Jane Smith",
          category: "Web Development",
          students: "2.5k",
          duration: "8 weeks",
          rating: "4.9",
          price: "79",
          description: "Learn React from scratch with hands-on projects. Cover components, hooks, state management, and modern React patterns."
        },
        {
          id: 3,
          title: "MongoDB Crash Course",
          instructor: "Mike Johnson",
          category: "Data Science",
          students: "890",
          duration: "6 weeks",
          rating: "4.7",
          price: "59",
          description: "Complete MongoDB guide covering document databases, aggregation pipelines, indexing, and performance optimization."
        },
        {
          id: 4,
          title: "Express.js In Depth",
          instructor: "Sarah Wilson",
          category: "Web Development",
          students: "1.8k",
          duration: "10 weeks",
          rating: "4.6",
          price: "89",
          description: "Build robust backend applications with Express.js. Learn middleware, routing, authentication, and API development."
        },
        {
          id: 5,
          title: "UI/UX Design Fundamentals",
          instructor: "Alex Chen",
          category: "UI/UX Design",
          students: "3.2k",
          duration: "14 weeks",
          rating: "4.9",
          price: "119",
          description: "Master the principles of user interface and user experience design. Create beautiful, functional designs that users love."
        },
        {
          id: 6,
          title: "React Native Development",
          instructor: "Emma Davis",
          category: "Mobile Development",
          students: "1.5k",
          duration: "16 weeks",
          rating: "4.8",
          price: "129",
          description: "Build cross-platform mobile apps with React Native. Learn navigation, state management, and native module integration."
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  ---------------------------------------------------------------------------------------------------

  <div className="md:min-h-screen md:w-full  from-gray-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [...Array(6)].map((_, i) => <CourseSkeleton key={i} />)
            : filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
        </div>

        {/* No Results Message */}
        {!loading && filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filter criteria
            </p>
          </div>
        )}

        {/* Course Statistics */}
        {!loading && filteredCourses.length > 0 && (
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  {courses.length}
                </div>
                <div className="text-gray-600">Total Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  {courses.reduce((sum, course) => sum + parseFloat(course.students.replace('k', '')) * 1000, 0) / 1000}k+
                </div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  {categories.length - 1}
                </div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">
                  4.8
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>


   