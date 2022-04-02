import { Box, Button, Center, Stack, Text, Title } from "@mantine/core";

const Phone = () => {
  return (
    <Center
      style={{
        height: "100vh",
      }}
    >
      <Stack p="md">
        <Title
          align="center"
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
          })}
        >
          The new BetterCharts does not support phone
        </Title>
        <Text
          align="center"
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
          })}
        >
          I am working on an app
        </Text>
        <a href="https://app.bettercharts-legacy.zelr.me">
          <Button fullWidth>Use the legacy bettercharts</Button>
        </a>
      </Stack>
    </Center>
  );
};

export default Phone;