import { useQuery } from "react-query";
import { supabase } from "./supabase";
import { QuizQuestion } from "../models/quiz";

const getQuizQuestions = async (
  questionSetId: number,
  questionNumber: number
) => {
  const { data } = await supabase
    .from("QuizQuestion")
    .select("*")
    .eq("quizId", questionSetId)
    .eq("questionNumber", questionNumber);

  return data?.[0] as QuizQuestion | undefined;
};

export const useQuizQuestionsQuery = (
  questionSetId: number,
  questionNumber: number
) =>
  useQuery(["quizQuestions", questionSetId, questionNumber], async () =>
    getQuizQuestions(questionSetId, questionNumber)
  );
