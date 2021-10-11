import { Button, Flex } from "@aws-amplify/ui-react";

export function TestComponent() {
  return (
    <Flex>
      I'm some text
      <Flex>
        <Button>Click me</Button>
      </Flex>
    </Flex>
  );
}
