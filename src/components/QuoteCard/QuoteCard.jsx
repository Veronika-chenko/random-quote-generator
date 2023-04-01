import { Author, Card, FeatureButton, FeaturesContainer, Footer, Quote, SubmitButton, Title } from "./QuoteCard.styled"
import { FaCopy, FaVolumeUp, FaTwitter } from "react-icons/fa";

export const QuoteCard = () => {
    return (
        <Card>
            <Title>Quote of the Day</Title>
            <Quote>You are never given a wish without also being given the power to make it come true. You may have to work for it, however.</Quote>
            <Author>Richard Bach</Author>
            
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
                <SubmitButton>New Quote</SubmitButton>
            </Footer>
        </Card>
    )
}