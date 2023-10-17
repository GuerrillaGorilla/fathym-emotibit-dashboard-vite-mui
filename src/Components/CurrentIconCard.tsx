import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material'; // import individual components from the library

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  unit: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, content, unit }) => {
  return (
    <Card sx={{ display: 'flex', minHeight: 100 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 2, pb: 1 }}>
        {icon}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '0 0 auto' }}>
          <Typography variant="caption" color="text.secondary" component="div">
            {content}
          </Typography>
          <Typography component="div" variant="h5">
            {title}<Typography component="span" variant="overline" color="text.secondary">&nbsp;{unit}</Typography>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default IconCard;