import { Button, Flex, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </>
  );
}

export default App;
