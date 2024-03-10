import { useMantineTheme, lighten, Grid, SimpleGrid, Skeleton, rem, Center, Group, Box } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(400);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const theme = useMantineTheme();
  const themeBackground = lighten(theme.colors.myColor[0], 0.4);
  const themeBorder = theme.colors.myColor[1];

  console.log('%ctheme', `color: ${theme.colors.lime[5]}`, theme.colors.lime[0]);
  console.log('%ctheme', 'color: tomato', theme.colors.lime[0]);

  const gridItemStyles = {
    // height: PRIMARY_COL_HEIGHT,
    background: themeBackground,
    border: `1px solid ${themeBorder}`,
    padding: rem(20),
  }

  return (
    <Center h={{base: 'unset', sm: '100vh'}} pt={{base: rem(60), sm: rem(20)}}>

        <Group justify="right"
          style={{
            background: lighten(themeBackground, 0.3),
            width: "80%", padding: "10px",
            position: "fixed", top: 0
          }}>
          <a href="">Github</a><a href="">LinkedIn</a><a href="">Email</a>
          {/* icons in toolbar https://mantine.dev/guides/icons/ */}
        </Group>

      {/* WRAPPER GRID
      =================== */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{width: "80%"}}>

        {/* FIRST GRID
        =================== */}
        <Grid gutter="md">
          <Grid.Col>
            <Box style={{...gridItemStyles, height: PRIMARY_COL_HEIGHT}}>
            <h1 style={{ margin: "0", display: "flex", flexDirection: "column"}}>
              <span>Hello!</span>
              <span>My name is Julian French</span>
              <span>I'm a Web Developer based in Kansas City!</span>
            </h1>
            </Box>
          </Grid.Col>

          <Grid.Col>
            <Box style={{...gridItemStyles, height: SECONDARY_COL_HEIGHT}}>
              add badges here https://mantine.dev/core/badge/
            </Box>
          </Grid.Col>
        </Grid>

        {/* SECOND GRID
        =================== */}
        <Grid gutter="md">

          <Grid.Col span={6}>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
            <Box style={{...gridItemStyles, height: SECONDARY_COL_HEIGHT}}>

            </Box>
          </Grid.Col>

          <Grid.Col span={6}>
            {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
            <Box style={{...gridItemStyles, height: SECONDARY_COL_HEIGHT}}>

            </Box>
          </Grid.Col>

          <Grid.Col>
            {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
            <Box style={{...gridItemStyles, height: PRIMARY_COL_HEIGHT}}>

            </Box>
          </Grid.Col>

        </Grid>

      </SimpleGrid>
      </Center>
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
