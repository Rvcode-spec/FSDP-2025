import "./App.css";

import { useEffect, useState } from "react";

export default function FetchLocalJson() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Log entire data to verify structure
        if (data?.questions?.length > 0) {
          setData(data);
        } else {
          setError("Data mein koi questions nahi hain.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data?.questions?.length) return <p>No quiz data available.</p>;

  const handleAnswer = (answer) => {
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: data.questions[currentQuestionIndex]?.question, answer },
    ]);

    if (currentQuestionIndex + 1 < data.questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer.answer === data.questions[index].correct_answer) {
        newScore++;
      }
    });
    return newScore;
  };

  if (quizCompleted) {
    return (
      <div style={styles.container}>
        <h2>Quiz Complete!</h2>
        <p>
          Aapka total score: {calculateScore()} out of {data.questions.length}
        </p>
        <h3>Your Answers:</h3>
        <ul>
          {userAnswers.map((answer, index) => (
            <li key={index}>
              <strong>{answer.question}</strong>: {answer.answer}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Ensure currentQuestion is valid or reset it if invalid
  const currentQuestion = data.questions[currentQuestionIndex] || {};
  console.log(currentQuestion);
  console.log(currentQuestionIndex);

  // If question doesn't exist, reset to the first question
  if (currentQuestion?.question) {
    return <p>Kuch galat ho gaya. Question nahi mil raha hai.</p>;
  }

  return (
    <div style={styles.container}>
      {/* Displaying current question */}
      <h1 style={styles.question}>
        Question {currentQuestionIndex + 1}: {currentQuestion?.question}
      </h1>
      <div style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option?.description || option)}
            disabled={userAnswers.length > currentQuestionIndex} // Multiple selection rokna
            style={styles.optionButton}
          >
            {option.description || option}
          </button>
        ))}
      </div>
    </div>
  );
}

// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    padding: "20px",
  },
  question: {
    fontSize: "32px", // Visibility ke liye font size badha diya
    fontWeight: "bold",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    
    gap: "10px",
  },
  optionButton: {
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    transition: "0.3s",
  },
};
