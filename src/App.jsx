import "@radix-ui/themes/styles.css";
import { Button, Flex, Text } from "@radix-ui/themes";
import ReviewModal from "./components/ReviewModal";
import { PerguntasFrequentes } from "./components/PerguntasFrequentes";

function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
      <ReviewModal />
      <PerguntasFrequentes />
    </>
  );
}

export default App;
