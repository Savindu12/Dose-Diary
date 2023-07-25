import React, { useState } from "react";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "@fontsource/poppins";
import HomeBG from "../../assets/Art4.jpg"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function LoginForm () {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const backgroundImageStyle = {
    backgroundImage: `url("${HomeBG}")`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    AOS.init();
  }, [])

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/login")
      .then (res => console.log(res))
      .catch(err => console.log(err));
}

  //   try {
  //     await authService.login(userName, password).then (
  //       () => {
  //         navigate("/Admin");
  //         window.location.reload();
  //       },
  //       (Error) => {
  //         console.log(Error);
  //       }
  //     )
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }

    return (
      <div class="m-auto xl:container min-h-screen font-poppins" style={backgroundImageStyle}>
      <div data-aos="fade-up"
     data-aos-duration="450" class="mx-auto h--16 sm:w-max">
        <div class="m-auto py-12">
          <div class="space-y-4">
            <a href="">
              <img src="images/tailus.svg" class="w-40 dark:hidden" alt="tailus logo" />
              <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" />
            </a>
          </div>
        <div class="mt-12  rounded-3xl border bg-gray-50 dark:border-slate-600 dark:bg-slate-600 -mx-6 sm:-mx-10 p-8 sm:p-10">
          <div class="text-center mt-8">
          <h3 class="text-4xl font-semibold font-poppins text-white dark:text-white">Sign in to Dose Diary</h3>
                <span class="text-lg tracking-wide dark:text-white">Don't have an account? </span>
              <Link to = "/createAccount" type="reset" class="-ml-3 w-max p-3">
                <span class="text-xl pl-2 text-blue-600 dark:text-blue-400">Sign Up</span>
              </Link>
          </div>
          
          <form onSubmit={handleSubmit} class="mt-10 space-y-8 text-white">
            <div>
              <div class="relative">
                {/* <input id="" type="email" placeholder="Your email or user name" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"> */}
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
        '& label.Mui-focused' : {color: 'white'},
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white'
          },
          '&:hover fieldset': {
            borderColor: 'white'
          }}
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          id="outlined"
          type="email"
          label="Email"
          name="email"
          // value={userName}
          onChange={(e) => setValues({...values, email: e.target.value})}
          InputLabelProps={{
            style: { color: 'white' },
            textInput : {
              color: 'white'
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle style={{color: "white"}} />
              </InputAdornment>
            ),
          }}
        />
      </div>
      </Box>
              </div>
            </div>
    
            <div class="flex flex-col items-end">
              <div class="w-full relative">
                {/* <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"> */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div>
           <FormControl sx={{ m: 1, width: '55ch', '& label.Mui-focused' : {color: 'white'},
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white'
          },
          '&:hover fieldset': {
            borderColor: 'white'
          }} 
        }} 
        
        variant="outlined">

          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
        
          <OutlinedInput
            id="outlined-adornment-password"
            // value={password}
            onChange={(e) => setValues({...values, password: e.target.value})}
            type={showPassword ? 'text' : 'password'}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{color: "white"}} 
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton >
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        </Box>
              </div>
              <Link to = "/ForgotPassword" type="reset" class="-mr-3 w-max p-3">
                <span class="text-x1 font-semibold tracking-wide text-blue-600 dark:text-blue-400">Forgot password ?</span>
              </Link>
            </div>
    
            <div>
              <button
                type="submit"
                class="w-full rounded-full bg-blue-600 dark:bg-blue-600 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span class="text-xl font-semibold text-white dark:text-white">Sign In</span>
              </button>
            </div>
          </form>
        </div>
          <div class="border-t pt-10 text-white dark:border-gray-800">
            <div class="space-x-4 text-center">
              <span>&copy; CodexPro</span>
              <a href="#" class="text-sm hover:text-white dark:hover:text-white">Powered By CodexPro</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

}
export default LoginForm;