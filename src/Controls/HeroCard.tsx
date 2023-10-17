import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import TooHot from '../Images/toohot.png';
import TooCold from '../Images/toocold.png';

interface HeroCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  image?: string;
  unit: string;
}

export default function HeroCard({ icon, title, content, unit }: HeroCardProps): JSX.Element {
  return (
    <Box sx={{ maxWidth: 345, backgroundImage: { xs: `url('${TooCold}')`, md: `url('${TooHot}')` },
    backgroundRepeat: "no-repeat" }}>
      <CardMedia
        sx={{ height: 90 }}
        image={TooCold}
        title="Cold"
      />
      {icon}
      <CardContent>
        <Typography gutterBottom variant="h5" color="#333333" component="div">
          {title}
          <Typography component="span" variant="overline" color="#333333">
            &nbsp;{unit}
          </Typography>
        </Typography>
        <Typography variant="body2" color="#333333">
          {content}
        </Typography>
      </CardContent>
    </Box>
  );
}