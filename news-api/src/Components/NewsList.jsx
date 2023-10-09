import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";


const NewsList = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try{
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=060945c382204b5b88a4a86f2eb47f0a');
        setArticles(response.data.articles)
      } catch(e){
        console.log(e);
      }
      setLoading(false)
    }
    fetchData();
  },[])

//대기 중일 때 로딩
if(loading){
  return <NewsItemBlock>대기 중...</NewsItemBlock>
}

//아티클이 없을 때
if (!articles) {
  return null;
}

    return (
        <NewsItemBlock>
          {articles.map((article) => (
            <NewsItem key={article.url} article={article}/>
          ))}
        </NewsItemBlock>
    )
}

const NewsItemBlock = styled.div`
  box-sizing : border-box;
  padding-bttom : 3rem;
  width : 768px;
  height : 500px;
  margin : 2rem auto 0;

  @media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }

`;

export default NewsList