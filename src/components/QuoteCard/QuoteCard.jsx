import { useEffect, useRef, useState } from "react";
import { Author, Card, FeatureButton, FeaturesContainer, Footer, Quote, NewQuoteButton, Title, FeatureLink } from "./QuoteCard.styled"
import { FaCopy, FaVolumeUp, FaTwitter } from "react-icons/fa";
import { getRandomQuote } from "../../services/Api";

export const QuoteCard = () => {
    const [quote, setQuote] = useState(null);
    const quoteText = useRef();

    useEffect(() => {
        fetchNewQuote();
    }, [])

    const fetchNewQuote = async () => {
        const quote = await getRandomQuote();
        setQuote(quote);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(quoteText.current.innerText);
    }

    const twitterRef = `http://twitter.com/intent/tweet?text=${quote?.quote + " " + quote?.author}`

    return (
        <Card>
            <Title>Quote of the Day</Title>
            <Quote ref={quoteText}>{quote?.quote}</Quote>
            <Author>{quote?.author}</Author>
            <Footer>
                <FeaturesContainer>
                    <li>
                        <FeatureButton><FaVolumeUp /></FeatureButton>
                    </li>
                    <li>
                        <FeatureButton onClick={copyToClipboard}><FaCopy /></FeatureButton>
                    </li>
                    <li>
                        <FeatureLink href={twitterRef} target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </FeatureLink>
                    </li>
                </FeaturesContainer>
                <NewQuoteButton onClick={fetchNewQuote}>New Quote</NewQuoteButton>
            </Footer>
        </Card>
    )
}
         