import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import ArticleInterface from "../interfaces/ArticleInterface"
import SingleArticle from "./SingleArticle"


const FetchArticle = () => {

    const [articles, setArticles] = useState<ArticleInterface[]>([])

const fetchFunction = async () => {
    try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/')
        if(response.ok) {
            const arrOfArt = await response.json()
            setArticles(arrOfArt.results || [])
        } else {
            throw new Error('Fetch error')
        }
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fetchFunction()
}, [])

return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Articles:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map(article => (
          <SingleArticle key={article.id} article={article} />
        )).slice(0,8)}
      </Row>
    </Container>
  );
  
}

export default FetchArticle