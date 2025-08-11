import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      © 2013-{new Date().getFullYear()}{' '}
      <MuiLink color="inherit" href="https://jhekasoft.github.io/">
        Jhekasoft
      </MuiLink>
    </Typography>
  );
}
