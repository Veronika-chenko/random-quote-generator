import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Author, Card, FeatureButton, FeaturesContainer, Footer, Quote, NewQuoteButton, Title, FeatureLink } from "./QuoteCard.styled"
import { FaCopy, FaTwitter } from "react-icons/fa";
import { getRandomQuote } from "../../services/Api";
import { Loader } from "../Loader";

export const QuoteCard = () => {
    const [quote, setQuote] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const quoteText = useRef();

    useEffect(() => {
        fetchNewQuote();
    }, [])

    const fetchNewQuote = async () => {
        try {
            setIsLoading(true)
            const quote = await getRandomQuote();
            setQuote(quote);
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(quoteText.current.innerText);
        toast.info("Quote copied");
    }

    // const readQuote = () => {
    //     return;
    // }

    const twitterRef = `http://twitter.com/intent/tweet?text=${quote?.quote + " " + quote?.author}`

    return (
        <>
            {isLoading && <Loader />}
            <Card>
                <Title>Quote of the Day</Title>
                <Quote ref={quoteText}>{quote?.quote}</Quote>
                <Author>{quote?.author}</Author>
                <Footer>
                    <FeaturesContainer>
                        {/* <li>
                            <FeatureButton onClick={readQuote}><FaVolumeUp /></FeatureButton>
                        </li> */}
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
            <ToastContainer 
                theme="colored" 
                autoClose={1000}
                hideProgressBar={true}/>
        </>
    )
}
         