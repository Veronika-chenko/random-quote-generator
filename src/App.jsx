import { Section, Container } from "./App.styled";
import { QuoteCard } from "./components/QuoteCard";

export const App = () => {
  return (
    <Section>
      <Container>
        <QuoteCard />
      </Container>
    </Section>
  );
}
