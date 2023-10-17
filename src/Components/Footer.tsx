import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconFormat } from '../Controls/IconManager';
import { useTheme } from '@mui/material/styles';
import { IconDisplay } from '../Controls/IconManager';
import { IconContext } from 'react-icons';

const FooterCompany = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant='subtitle1' ml={2}>
        Products
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['fathym']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/' underline='none' variant='body2'>
            {'Fathym Platform'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['memory']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/iot/' underline='none' variant='body2'>
            {'IoT Ensemble'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['storm']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/forecast/' underline='none' variant='body2'>
            {'Habistack'}
          </Link>
        </ListItem>
      </List>
    </>
  );
};

const FooterInfo = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant='subtitle1' ml={2}>
        Resources
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['code']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/docs/' underline='none' variant='body2'>
            {'Docs'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['news']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/blog/' underline='none' variant='body2'>
            {'Blog'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['livehelp']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='mailto:support@fathym.com' underline='none' variant='body2'>
            {'Support'}
          </Link>
        </ListItem>
      </List>
    </>
  );
};

const FooterLegal = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant='subtitle1' ml={2}>
        Company
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['handshake']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/enterprise-agreement/' underline='none' variant='body2'>
            {'Enterprise Agreement'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['gavel']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/terms-of-services/' underline='none' variant='body2'>
            {'Terms of Service'}
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <IconFormat
              iconNames={['policy']}
              iconColors={[`${theme.palette.primary}`]}
              values={[0]}
              iconSize='1.5em'
              currentValue={0}
            />
          </ListItemIcon>
          <Link href='https://www.fathym.com/privacy-policy/' underline='none' variant='body2'>
            {'Privacy Policy'}
          </Link>
        </ListItem>
      </List>
    </>
  );
};

const FooterSocial = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }} mt={4} mb={4}>
      <Grid container spacing={3} alignItems='center' disableEqualOverflow>
        <Grid display='flex' alignItems='center' justifyContent='center'>
          <Link href='https://twitter.com/FathymIt' underline='none' variant='body2'>
            <IconContext.Provider value={{ color:`${theme.palette.primary}`, size:"2em" }}>
              <IconDisplay iconName='twitter' />
            </IconContext.Provider>
          </Link>
        </Grid>
        <Grid display='flex' alignItems='center' justifyContent='center'>
          <Link href='https://www.facebook.com/FathymInc/' underline='none' variant='body2'>
            <IconContext.Provider value={{ color: `${theme.palette.primary}`, size: '2em' }}>
              <IconDisplay iconName='facebook' />
            </IconContext.Provider>
          </Link>
        </Grid>
        <Grid display='flex' alignItems='center' justifyContent='center'>
          <Link href='https://www.instagram.com/fathymit/' underline='none' variant='body2'>
            <IconContext.Provider value={{ color: `${theme.palette.primary}`, size: '2em' }}>
              <IconDisplay iconName='instagram' />
            </IconContext.Provider>
          </Link>
        </Grid>
        <Grid display='flex' alignItems='center' justifyContent='center'>
          <Link href='https://www.youtube.com/@fathyminc5477/' underline='none' variant='body2'>
            <IconContext.Provider value={{ color: `${theme.palette.primary}`, size: '2em' }}>
              <IconDisplay iconName='youtube' />
            </IconContext.Provider>
          </Link>
        </Grid>
        <Grid display='flex' alignItems='center' justifyContent='center'>
          <Link href='https://github.com/fathym' underline='none' variant='body2'>
            <IconContext.Provider value={{ color: `${theme.palette.primary}`, size: '2em' }}>
              <IconDisplay iconName='github' />
            </IconContext.Provider>
          </Link>
        </Grid>
      </Grid>
      <Typography variant='body2' color='text.secondary' mb={2} ml={2}>
        &copy; {new Date().getFullYear()} Fathym All rights reserved
      </Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} mb={2} ml={2}>
      <Grid container>
        <Grid xs={12} md={3}>
          <FooterCompany />
        </Grid>
        <Grid xs={12} md={3}>
          <FooterInfo />
        </Grid>
        <Grid xs={12} md={3}>
          <FooterLegal />
        </Grid>
        <Grid xs={12} md={3}>
          <FooterSocial />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;