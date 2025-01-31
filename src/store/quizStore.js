import axios from "axios";

export const fetchQuizData = async () => {
  try {
    const response = await axios.get("/api");
    console.log("API Response:", response.data);

    return {
      questions: response.data.questions.map((q) => ({
        questionText: q.description,
        options: q.options.map((opt) => ({
          answerText: opt.description,
          isCorrect: opt.is_correct,
        })),
        detailedSolution: q.detailed_solution,
      })),
    };
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return { questions: [] };
  }
};
