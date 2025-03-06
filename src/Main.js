import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import WishListPage from "./pages/WishlistPage";
import QuestionListPage from "./pages/QuestionListPage";
import QuestionPage from "./pages/QuestionPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />}></Route>
            <Route
              path="courses/react-frontend-development"
              element={<CoursePage />}
            ></Route>
          </Route>
          <Route path="wishlist" element={<WishListPage />} />

          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
