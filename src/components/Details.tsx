import { useEffect, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ArticleInterface from "../interfaces/ArticleInterface";

const Details = () => {
    const [article, setArticle] = useState<ArticleInterface | null>(null);
    const params = useParams<{ id: string }>();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`);
                if (response.ok) {
                    const articleData = await response.json();
                    setArticle(articleData);
                } else {
                    throw new Error('Failed to fetch article details');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        if (params.id) {
            fetchArticle();
        }
    }, [params.id]);

    if (!article) {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>No content available</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <Col xs={12} md={8} className="my-3">
                    <Image src={article.image_url} alt={article.title} fluid />
                </Col>
                <Col xs={12} md={4}>
                    <h2>{article.title}</h2>
                    <p>{article.summary}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;
