import { addWishlist, getCourseBySlug } from "../api";
import Button from "../components/Button";
import Container from "../components/Container";
import Card from "../components/Card";
import CourseIcon from "../components/CourseIcon";
import getCourseColor from "../utils/getCourseColor";
import styles from "./CoursePage.module.css";
import { Navigate, useNavigate } from "react-router-dom";

function CoursePage() {
  const navigate = useNavigate();
  const course = getCourseBySlug("react-frontend-development");
  const courseColor = getCourseColor(course?.code);

  // 렌더링 시점에 페이지 이동, 왜냐? 얘가 if에 안걸리면 얘 말고 다른 밑에가 리턴되겠지. 얘에 걸리면 얘 컴포넌트를 반환하는 특정 조건
  if (!course) {
    return <Navigate to="/courses"></Navigate>;
  }

  const headerStyle = {
    borderTopColor: courseColor,
  };

  const handleAddWishlistClick = () => {
    addWishlist(course?.slug);
    navigate("/wishlist");
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round" onClick={handleAddWishlistClick}>
            + 코스 담기
          </Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container className={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.title}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
