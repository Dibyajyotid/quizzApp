import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get("/api");
    console.log("API Response:", response.data); // Debug API response

    return {
      questions: response.data.questions.map((q) => ({
        questionText: q.description, // Corrected key for question text
        options: q.options.map((opt) => ({
          answerText: opt.description, // Corrected key for options
          isCorrect: opt.is_correct, // Corrected key for correctness
        })),
        detailedSolution: q.detailed_solution,
      })),
    };
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return { questions: [] };
  }
};
