import React from 'react';
import { Typography, Paper, Box, Breadcrumbs, Link } from '@mui/material';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { getSectionById } from '../../data/guideData';
import SectionContent from './SectionContent';
import HomeIcon from '@mui/icons-material/Home';

const SectionPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = getSectionById(sectionId || '');

  if (!section) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="error">
          Section not found
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The requested section could not be found. Please select a valid section from the menu.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography color="text.primary">{section.title}</Typography>
      </Breadcrumbs>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {section.title}
        </Typography>
        
        <SectionContent content={section.content} />
      </Paper>
    </Box>
  );
};

export default SectionPage;
