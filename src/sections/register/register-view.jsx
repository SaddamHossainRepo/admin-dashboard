import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link, Route, useNavigate, BrowserRouter as Router } from 'react-router-dom';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function RegisterView() {
  const theme = useTheme();
  

  // const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate();

  const handleRegister = async () => {
    // eslint-disable-next-line prefer-const
    let item = { name, email, password };
    console.log(item);
    const response = await fetch('http://localhost:9000/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (!result.tokens) {
      Swal.fire(result.message);
    } else {
      localStorage.setItem('user-info', JSON.stringify(result));
      Swal.fire('user created successfully');
      history('/products');
      console.log(result);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem('user-info')) {
  //     history('/');
  //   }
  // }, [history]);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:9000/v1/auth/register', {
  //     method: 'POST',
  //     body: JSON.stringify({ name, email, password }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const result = await response.json();
  //   console.log(result);
  //   localStorage.setItem('user-info', JSON.stringify(result));
  //   history('/products');
  //   console.log('user registered', email, password);
  //   notify();
  //   // router.push('/dashboard');
  // };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Your Name" onChange={(e) => setName(e.target.value)} />
        <TextField name="email" label="Email address" onChange={(e) => setEmail(e.target.value)} />

        <TextField
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}
      <br />

      <LoadingButton
        fullWidth
        size="large"
        type="submit" 
        variant="contained"
        color="inherit"
        onClick={handleRegister}
      >
        Register
      </LoadingButton>
    </>
  );

  return (
    // <form onSubmit={() => handleClick}>
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Register in to Blackboij</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Already have an account?
            <Link to="/login" variant="subtitle2" sx={{ ml: 0.5 }}>
              Login
            </Link>
          </Typography>

          {/* <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography> */}

          {/* <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack> */}

          {/* <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider> */}

          {renderForm}
        </Card>
      </Stack>
    </Box>
    // </form>
  );
}
