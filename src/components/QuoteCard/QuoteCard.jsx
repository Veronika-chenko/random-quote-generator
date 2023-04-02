import { useEffect, useState } from "react";
import { Author, Card, FeatureButton, FeaturesContainer, Footer, Quote, SubmitButton, Title } from "./QuoteCard.styled"
import { FaCopy, FaVolumeUp, FaTwitter } from "react-icons/fa";
import { getRandomQuote } from "../../services/Api";

export const QuoteCard = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetchNewQuote();
    }, [])

    const fetchNewQuote = async () => {
        const quote = await getRandomQuote();
        setQuote(quote);
    }

    return (
        <Card>
            <Title>Quote of the Day</Title>
            <Quote>{quote?.quote}</Quote>
            <Author>{quote?.author}</Author>
            <Footer>
                <FeaturesContainer>
                    <li>
                        <FeatureButton><FaVolumeUp /></FeatureButton>
                    </li>
                    <li>
                        <FeatureButton><FaCopy /></FeatureButton>
                    </li>
                    <li>
                        <FeatureButton><FaTwitter /></FeatureButton>
                    </li>
                </FeaturesContainer>
                <SubmitButton onClick={fetchNewQuote}>New Quote</SubmitButton>
            </Footer>
        </Card>
    )
}
         