'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Divider,
  Paper,
  TextField,
  IconButton,
} from '@mui/material';
import { GitHub, Email, DarkMode, LightMode, LinkedIn } from '@mui/icons-material';
import { useColorMode } from '@/components/ThemeRegistry';
import { Row, Col, Card, Collapse } from 'antd';
import { Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
// import { RightOutlined } from '@ant-design/icons';
import { ExpandMore } from '@mui/icons-material';

const skills = ['Core Java', 'Spring Boot', 'React JS', 'MongoDB', 'MySQL', 'Git'];

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();
  const { Panel } = Collapse;

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Dark Mode Toggle */}
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={toggleColorMode} aria-label="Toggle dark mode">
          {theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Box>

      {/* Hero */}
      <Box
        textAlign="center"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ py: { xs: 6, md: 10 } }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          👋 Hi, I'm Manojkumar
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Full Stack Developer | Java | Spring Boot | React | MongoDB
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button variant="contained" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/manocpp" target="_blank">
            LinkedIn
          </Button>
          <Button variant="outlined" startIcon={<Email />} href="mailto:manojkumar.work1@gmail.com">
            Contact
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* About Me */}
      <Box textAlign="center" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography color="text.secondary">
          I'm a passionate full-stack developer with experience in Java, Spring Boot, React, and MongoDB.
          I transitioned from mechanical engineering into tech, and I'm currently working on the GoalSync OKR management platform.
        </Typography>
      </Box>

      <Divider sx={{ my: 8 }} />

      {/* Skills */}


<Box
      textAlign="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ px: 2, py: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {skills.map((skill) => (
          <Grid size={{ xs: 8, sm: 7, md: 6, lg: 3 }}>
            <Paper
              sx={{
                p: 2,
                fontWeight: 'bold',
                textAlign: 'center',
                bgcolor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                color: theme.palette.text.primary,
                boxShadow: 3,
              }}
            >
              {skill}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>

      <Divider sx={{ my: 8 }} />

      {/* Projects */}

    <Box
      textAlign="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Card
            title={
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.primary, m: 0 }}
              >
                GoalSync
              </Typography>
            }
            variant="borderless"
            style={{
              backgroundColor:
                theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
              color: theme.palette.text.primary,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>
              OKR (Objectives and Key Results) management tool built to help
              users set goals and track measurable results.
            </p>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Card
            title={
              <Typography
                variant="h6"
                sx={{ color: theme.palette.text.primary, m: 0 }}
              >
                GoalSync
              </Typography>
            }
            variant="borderless"
            style={{
              backgroundColor:
                theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
              color: theme.palette.text.primary,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>
              OKR (Objectives and Key Results) management tool built to help
              users set goals and track measurable results.
            </p>
          </Card>
        </Grid>
      </Grid>
    </Box>

      <Divider sx={{ my: 8 }} />

      {/* Work Experience */}
      {/* <Box
        textAlign="center"
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" gutterBottom>
          Work Experience
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          sx={{
            mt: 3,
            backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
            borderRadius: 2,
            p: 2,
            boxShadow: 3,
          }}
        >
          <Collapse
            accordion
            expandIconPosition="end"
            bordered={false}
            style={{ background: 'transparent', color: theme.palette.text.primary }}
            items={[
              {
                key: '1',
                label: 'Trainee Developer - Hema’s Enterprises PVT LTD',
                children: (
                  <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    <strong>Oct 2024 - Present</strong> <br />
                    Working on GoalSync product – handling OKR management tools using React & Spring Boot.
                  </Typography>
                ),
              },
              {
                key: '2',
                label: 'Quality Engineer - Violin Technologies PVT LTD',
                children: (
                  <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    <strong>Aug 2022 - Dec 2022</strong> <br />
                    Responsible for in-process inspection, ISO documentation, and quality control.
                  </Typography>
                ),
              },
              {
                key: '3',
                label: 'Quality Control - Floking Pipes PVT LTD',
                children: (
                  <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    <strong>July 2021 - July 2022</strong> <br />
                    Managed quality documentation, testing processes, and manufacturing compliance.
                  </Typography>
                ),
              },
              {
                key: '4',
                label: 'Testing Operator - WIPRO Infra Engineering',
                children: (
                  <Typography variant="body2" sx={{ textAlign: 'left' }}>
                    <strong>Aug 2018 - May 2021</strong> <br />
                    Performed hydraulic cylinder testing, validation, and assembly-line quality checks.
                  </Typography>
                ),
              },
            ]}
          />
        </Box>
      </Box> */}

{/* <Box
  textAlign="center"
  component={motion.div}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Typography variant="h4" gutterBottom>
    Work Experience
  </Typography>

  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    sx={{
      mt: 3,
      backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
      borderRadius: 2,
      p: 2,
      boxShadow: 3,
    }}
  >
    <Collapse
      accordion
      expandIconPosition="end"
      bordered={false}
      style={{ background: 'transparent', color: theme.palette.text.primary }}
      items={[
        {
          key: '1',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Trainee Developer - Hema’s Enterprises PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Oct 2024 - Present</strong> <br />
                Working on GoalSync product – handling OKR management tools using React & Spring Boot.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '2',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Quality Engineer - Violin Technologies PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Aug 2022 - Dec 2022</strong> <br />
                Responsible for in-process inspection, ISO documentation, and quality control.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '3',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Quality Control - Floking Pipes PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>July 2021 - July 2022</strong> <br />
                Managed quality documentation, testing processes, and manufacturing compliance.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '4',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Testing Operator - WIPRO Infra Engineering
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Aug 2018 - May 2021</strong> <br />
                Performed hydraulic cylinder testing, validation, and assembly-line quality checks.
              </Typography>
            </motion.div>
          ),
        },
      ]}
    />
  </Box>
</Box> */}
<Box
  textAlign="center"
  component={motion.div}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Typography variant="h4" gutterBottom sx={{ color: theme.palette.text.primary }}>
    Work Experience
  </Typography>

  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    sx={{
      mt: 3,
      backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f9f9f9',
      borderRadius: 2,
      p: 2,
      boxShadow: 3,
    }}
  >
    <Collapse
      accordion
      expandIcon={({ isActive }) => (
        <ExpandMore
          style={{
            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            color: theme.palette.text.primary,
            fontSize:'30px'
          }}
        />
      )}
      expandIconPosition="end"
      bordered={false}
      style={{
        background: 'transparent',
        color: theme.palette.text.primary,
      }}
      items={[
        {
          key: '1',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Trainee Developer - Hema’s Enterprises PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Oct 2024 - Present</strong> <br />
                Working on GoalSync product – handling OKR management tools using React & Spring Boot.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '2',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Quality Engineer - Violin Technologies PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Aug 2022 - Dec 2022</strong> <br />
                Responsible for in-process inspection, ISO documentation, and quality control.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '3',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Quality Control - Floking Pipes PVT LTD
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>July 2021 - July 2022</strong> <br />
                Managed quality documentation, testing processes, and manufacturing compliance.
              </Typography>
            </motion.div>
          ),
        },
        {
          key: '4',
          label: (
            <Typography sx={{ color: theme.palette.text.primary }}>
              Testing Operator - WIPRO Infra Engineering
            </Typography>
          ),
          children: (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ textAlign: 'left', color: theme.palette.text.primary }}>
                <strong>Aug 2018 - May 2021</strong> <br />
                Performed hydraulic cylinder testing, validation, and assembly-line quality checks.
              </Typography>
            </motion.div>
          ),
        },
      ]}
    />
  </Box>
</Box>







{/* <Collapse
  accordion
  expandIconPosition="end"
  bordered={false}
  expandIcon={({ isActive }) => (
    <RightOutlined
      rotate={isActive ? 90 : 0}
      style={{ color: theme.palette.text.primary }}
    />
  )}
  style={{ background: 'transparent', color: theme.palette.text.primary }}
  items={[
    {
      key: '1',
      label: 'Trainee Developer - Hema’s Enterprises PVT LTD',
      children: (
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          <strong>Oct 2024 - Present</strong> <br />
          Working on GoalSync product – handling OKR management tools using React & Spring Boot.
        </Typography>
      ),
    },
    {
      key: '2',
      label: 'Quality Engineer - Violin Technologies PVT LTD',
      children: (
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          <strong>Aug 2022 - Dec 2022</strong> <br />
          Responsible for in-process inspection, ISO documentation, and quality control.
        </Typography>
      ),
    },
    {
      key: '3',
      label: 'Quality Control - Floking Pipes PVT LTD',
      children: (
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          <strong>July 2021 - July 2022</strong> <br />
          Managed quality documentation, testing processes, and manufacturing compliance.
        </Typography>
      ),
    },
    {
      key: '4',
      label: 'Testing Operator - WIPRO Infra Engineering',
      children: (
        <Typography variant="body2" sx={{ textAlign: 'left' }}>
          <strong>Aug 2018 - May 2021</strong> <br />
          Performed hydraulic cylinder testing, validation, and assembly-line quality checks.
        </Typography>
      ),
    },
  ]}
/> */}


      <Divider sx={{ my: 8 }} />

      {/* Contact */}
      <Box textAlign="center" component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Feel free to reach out about opportunities or just to connect.
        </Typography>
        <Box component="form" display="flex" flexDirection="column" alignItems="center" gap={2}>
          <TextField
            label="Your Name"
            fullWidth
            variant="outlined"
            InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
            InputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Your Email"
            fullWidth
            variant="outlined"
            InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
            InputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
            InputProps={{ style: { color: theme.palette.text.primary } }}
          />
          <Button variant="contained" size="large" aria-label="Send message">Send Message</Button>
        </Box>
      </Box>
    </Container>
  );
}
