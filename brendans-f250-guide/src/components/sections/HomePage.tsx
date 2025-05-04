import React from 'react';
import { 
  Typography, 
  Paper, 
  Box, 
  Card, 
  CardContent, 
  CardActionArea,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { guideData } from '../../data/guideData';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import WarningIcon from '@mui/icons-material/Warning';
import ConstructionIcon from '@mui/icons-material/Construction';
import SpeedIcon from '@mui/icons-material/Speed';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const getIconForSection = (sectionId: string) => {
  switch (sectionId) {
    case 'specifications':
      return <DirectionsCarIcon fontSize="large" />;
    case 'maintenance':
      return <BuildIcon fontSize="large" />;
    case 'systems':
      return <SettingsIcon fontSize="large" />;
    case 'troubleshooting':
      return <WarningIcon fontSize="large" />;
    case 'repair':
      return <ConstructionIcon fontSize="large" />;
    case 'upgrades':
      return <SpeedIcon fontSize="large" />;
    case 'reference':
      return <MenuBookIcon fontSize="large" />;
    default:
      return <DirectionsCarIcon fontSize="large" />;
  }
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Paper sx={{ p: 4, mb: 4, textAlign: 'center', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Brendan's 1997 Ford F250 Guide
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Complete Repair and Maintenance Guide for the 7.3L Powerstroke Diesel
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => navigate('/maintenance')}
            sx={{ mr: 2 }}
          >
            Maintenance Schedules
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            size="large"
            onClick={() => navigate('/troubleshooting')}
          >
            Troubleshooting
          </Button>
        </Box>
      </Paper>

      <Typography variant="h4" component="h2" gutterBottom>
        Guide Sections
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {guideData.map((section) => (
          <Box key={section.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' } }}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea onClick={() => navigate(`/${section.id}`)}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                  {getIconForSection(section.id)}
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.id === 'specifications' && 'Detailed specifications for your 1997 F250 7.3L Powerstroke Diesel.'}
                    {section.id === 'maintenance' && 'Recommended maintenance schedules and fluid specifications.'}
                    {section.id === 'systems' && 'Overview of all major systems in your truck.'}
                    {section.id === 'troubleshooting' && 'Diagnose and fix common issues with your F250.'}
                    {section.id === 'repair' && 'Step-by-step repair procedures for common maintenance tasks.'}
                    {section.id === 'upgrades' && 'Performance upgrades and modifications for your truck.'}
                    {section.id === 'reference' && 'Reference materials including torque specifications and diagnostic codes.'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>

      <Paper sx={{ p: 3, mt: 4, bgcolor: 'grey.100' }}>
        <Typography variant="h5" gutterBottom>
          About This Guide
        </Typography>
        <Typography variant="body1" paragraph>
          This comprehensive guide was created specifically for Brendan's 1997 Ford F250 with the 7.3L Powerstroke Diesel engine. It contains detailed information about maintenance, troubleshooting, repairs, and more.
        </Typography>
        <Typography variant="body1">
          The 7.3L Powerstroke is known for its reliability and longevity when properly maintained. This guide aims to help keep your truck running strong for many years to come.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;
