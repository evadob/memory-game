import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import classes from "./App.module.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { MemoryGame } from "./pages/MemoryGame/MemoryGame";
import { Quiz } from "./pages/Quiz/Quiz";
import { QuizList } from "./pages/QuizList/QuizList";

const queryClient = new QueryClient();

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

export const App = () => {
  const handleCloseButtonClick = () => {
    router.navigate("/");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <img
            src="../public/img/close-icon.svg"
            className={classes.closeIcon}
            onClick={handleCloseButtonClick}
          />
          <div className={classes.content}>
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};
