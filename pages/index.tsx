import { Box, Button, Center, Group, Paper } from "@mantine/core";
import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(400);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    // <Container my="md">
    //   <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
    //     <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
    //     <Grid gutter="md">
    //       <Grid.Col>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //       <Grid.Col span={6}>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //       <Grid.Col span={6}>
    //         <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
    //       </Grid.Col>
    //     </Grid>
    //   </SimpleGrid>
    // </Container>
    // <Container style={{ position: "absolute", width: "100%", top: "50%", left: "50%", transform: "translate(-50%, -50%"}}>
    <Center style={{ height: "100vh", paddingTop: "50px"}}>
      {/* <Box style={{border: "1px solid tomato", position: "fixed", top: 0, width: "100%", display: "flex", justifyContent: "center"}}> */}
        <Group justify="right"
          style={{
            background: "#eee", width: "80%", padding: "10px 0",
            position: "fixed", top: 0
          }}>
          <a href="">Github</a><a href="">LinkedIn</a><a href="">Email</a>
        </Group>
      {/* </Box> */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{width: "80%"}}>
        <Grid gutter="md">
        <Grid.Col>
          <Box style={{height: PRIMARY_COL_HEIGHT, background: "rgba(118, 124, 145, 0.1)"}}>
          {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
          <h1 style={{ margin: "0", display: "flex", flexDirection: "column"}}>
            <span>Hello!</span>
            <span>My name is Julian French</span>
            <span>I'm a Web Developer based in Kansas City!</span>
          </h1>
          </Box>
        </Grid.Col>
        <Grid.Col style={{border: "1px solid tomato"}}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      </Center>
    // </Container>
  );
}

export default function IndexPage() {
  return (
    // <Group mt={50} justify="center">
    //   <Button size="xl">Welcome to Mantine!</Button>
    // </Group>
    <LeadGrid />
  );
}
