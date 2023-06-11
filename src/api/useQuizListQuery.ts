import { useQuery } from "react-query";
import { supabase } from "./supabase";
import { QuizListItem } from "../models/quiz";

const getQuizList = async () => {
  const { data } = await supabase.from("vw_quizlistitems").select("*");

  return data as QuizListItem[];
};

export const useQuizListQuery = () => useQuery(["quizList"], getQuizList);
