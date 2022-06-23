import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Newsitem from "./Newsitem";
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }

`;


const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b64eba3fd8b64e4c998f0e75a9fa3ec6`)
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    if (loading) return <NewsListBlock>대기 중....</NewsListBlock>
    
    if (!articles) return <NewsListBlock>없는뎅?</NewsListBlock>
    return (
        <NewsListBlock>
            {articles.map(article => (
                <Newsitem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList