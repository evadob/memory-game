import { RouterProvider, createBrowserRouter } from "react-router-dom";
import classes from "./App.module.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { MemoryGame } from "./pages/MemoryGame/MemoryGame";
import { QuizList } from "./pages/QuizList/QuizList";
import { Quiz } from "./pages/Quiz/Quiz";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {
  const router = createBrowserRouter([
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
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};
