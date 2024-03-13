import { useMantineTheme, lighten, Grid, SimpleGrid, rem, Center, Group, Stack, Box, Badge, Button, Paper, Anchor } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconBrandGithubFilled, IconBrandLinkedin, IconMailFilled } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';

const PRIMARY_COL_HEIGHT = rem(400);
const contactInfo = [
  {
    name: "Github",
    link: "https://www.github.com/Jufrench",
    icon: <IconBrandGithubFilled />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julesfrench/",
    icon: <IconBrandLinkedin />
  },
  {
    name: "Email",
    link: "mailto:ju.french@gmail.com",
    icon: <IconMailFilled />
  },
  {
    name: "Ko-Fi",
    link: "https://ko-fi.com/moijules",
    customIcon: <KofiIcon />
  }
]
const skills: string[] = ["HTML","CSS","JavaScript","React","Vue","Ember","Node.js","Gatsby", "Next.js", "Mantine", "Bootstrap", "Oracle SQL"];
const projectList = [
  {
    id: 0,
    title: "Jotty",
    description: "A note taking app in the form of a rich text editor built with React, TypeScript, & Next.js.",
    link: "https://jotty-pink.vercel.app/"
  },
  {
    id: 1,
    title: "Vuu-do",
    description: "A to-do list app with a Vue.js & TypeScript frontend, a Node.js backend, Vite for bundling, and Next.js.",
    link: null
  },
];

function KofiIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="-2 2 34 24"
      // viewBox="0 0 24 24"
      // style={{ width: rem(size), height: rem(size), ...style }}
      style={{ width: 'auto', height: rem(20) }}
    
    >
      <path d="M31.844 11.932c-1.032-5.448-6.48-6.125-6.48-6.125h-24.4c-0.808 0-0.907 1.063-0.907 1.063s-0.109 9.767-0.027 15.767c0.22 3.228 3.448 3.561 3.448 3.561s11.021-0.031 15.953-0.067c3.251-0.568 3.579-3.423 3.541-4.98 5.808 0.323 9.896-3.776 8.871-9.219zM17.093 16.615c-1.661 1.932-5.348 5.297-5.348 5.297s-0.161 0.161-0.417 0.031c-0.099-0.073-0.14-0.12-0.14-0.12-0.595-0.588-4.491-4.063-5.381-5.271-0.943-1.287-1.385-3.599-0.119-4.948 1.265-1.344 4.005-1.448 5.817 0.541 0 0 2.083-2.375 4.625-1.281 2.536 1.095 2.443 4.016 0.963 5.751zM25.323 17.251c-1.24 0.156-2.244 0.036-2.244 0.036v-7.573h2.359c0 0 2.631 0.735 2.631 3.516 0 2.552-1.313 3.557-2.745 4.021z"/>
    </svg>
  );
}

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const theme = useMantineTheme();
  const themeBackground = lighten(theme.colors.myColor[2], 0.7);
  const themeBorder = theme.colors.myColor[1];

  const gridItemStyles = {
    background: themeBackground,
    border: `1px solid ${themeBorder}`,
    padding: rem(30),
    borderRadius: rem(10),
  };

  const projectCardStyles = {
    padding: rem(30),
  };

  return (
    <Center h={{sm: '100vh'}} pt={{base: rem(60), sm: rem(20)}}>

        <Group justify="flex-end"
          style={{
            background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(242,243,246,1) 80%, rgba(255,255,255,1) 100%)',
            width: "80%",
            padding: "10px",
            position: "fixed", top: 0,
            borderBottomLeftRadius: rem(10),
            borderBottomRightRadius: rem(10),
          }}>
          {contactInfo.map((item, index) => (
            <Anchor key={index} href={item.link} c={{base: theme.colors.myColor[7]}} target="_blank" rel="noopener noreferrer">
              {item.hasOwnProperty('customIcon') ? item.customIcon : item.icon}
            </Anchor>
          ))}
        </Group>

      {/* WRAPPER GRID
      =================== */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{width: "80%"}}>

        {/* FIRST GRID
        =================== */}
        <Grid gutter="md">
          <Grid.Col>
            <Box style={{...gridItemStyles, height: PRIMARY_COL_HEIGHT}}>
              <h2 style={{ margin: "0", display: "flex", flexDirection: "column"}}>
                <span>Hello!</span>
                <span>My name is Julian French.</span>
                <span>I&#39;m a Web Developer based in Kansas City!</span>
              </h2>
            </Box>
          </Grid.Col>

          <Grid.Col>
            <Box style={{...gridItemStyles, height: SECONDARY_COL_HEIGHT}}>
              <Group gap="sm">
                {skills.map((skill, index) => (
                  <Badge key={index} color={theme.colors.myColor[5]}>{skill}</Badge>
                ))}
              </Group>
            </Box>
          </Grid.Col>
        </Grid>

        {/* SECOND GRID
        =================== */}
        <Grid gutter="md">

          {/* <Grid.Col span={6}> */}
          <Grid.Col>
            <Box c={{base: '#fff'}} style={{...gridItemStyles, background: theme.colors.myColor[7], height: SECONDARY_COL_HEIGHT}}>
              Custom VSCode Theme coming soon...
            </Box>
          </Grid.Col>

          {/* <Grid.Col span={6}>
            <Box style={{...gridItemStyles, height: SECONDARY_COL_HEIGHT}}></Box>
          </Grid.Col> */}

          <Grid.Col style={{...gridItemStyles, height: PRIMARY_COL_HEIGHT, border: '1px solid dodgerblue', display: 'flex'}}>
            <Carousel
              withIndicators
              height="100%"
              slideSize="100%"
              slideGap="sm"
              loop
              slidesToScroll={1}
              align="start"
              style={{border: '1px solid limegreen', flex: 1, width: "100%"}}>
              <Carousel.Slide>
                <Paper w="100%" p={rem(30)} style={{ border: '1px solid tomato'}} h={{base: '100%'}} shadow="xs">
                  Rich Tech Editor
                  <Button variant="white" color="dark">View App ➡️</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper w="100%" p={rem(30)} style={{ border: '1px solid tomato'}} h={{base: '100%'}} shadow="xs">
                  Todo List
                  <Button variant="white" color="dark">View App ➡️</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper w="100%" p={rem(30)} style={{ border: '1px solid tomato'}} h={{base: '100%'}} shadow="xs">
                  Map?
                  <Button variant="white" color="dark">View App ➡️</Button>
                </Paper>
              </Carousel.Slide>
            </Carousel>
          </Grid.Col>

        </Grid>

      </SimpleGrid>
      </Center>
  );
}

export default function IndexPage() {
  return (
    <LeadGrid />
  );
}
