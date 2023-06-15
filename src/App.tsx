import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MemoryGame } from "./pages/MemoryGame/MemoryGame";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizList } from "./pages/QuizList/QuizList";

const queryClient = new QueryClient();

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/memory-game",
          element: <MemoryGame />,
        },
        {
          path: "/quiz",
          element: <QuizList />,
        },
        {
          path: "/quiz/:quizId/:questionNumber",
          element: <Quiz />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
