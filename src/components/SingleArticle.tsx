import { Card, Col } from "react-bootstrap";
import ArticleInterface from "../interfaces/ArticleInterface"
import { Link } from "react-router-dom";

interface ArticleProps {
    article: ArticleInterface
}

const SingleArticle = (props: ArticleProps) => {
    return (
        <Col xs={12} md={6} lg={3} className="text-center">
             <Link to={`/article/${props.article.id}`} style={{ textDecoration: 'none' }}>
          <Card className="article">
            <Card.Img variant="top" src={props.article.image_url} />
            <Card.Body>
              <Card.Title>{props.article.title}</Card.Title>
              <Card.Text>{props.article.summary}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      );
}

export default SingleArticle