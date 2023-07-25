import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import backgroundImage from "../../assets/Art2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ForgotPassword () {

  const backgroundImageHandler = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: "cover",
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

    return (
        <div class="min-h-screen flex flex-col justify-center " style={backgroundImageHandler}>
        <div class="relative sm:py-16" >
  
    <div data-aos="fade-up" class="relative xl:container m-auto px-6 text-gray-500 md:px-12" >
      <div class="m-auto space-y-8 sm:w-4/5 md:w-3/5 xl:w-2/5">
        <div class="p-8 md:py-12">
          {/* <img src="images/icon.svg" loading="lazy" class="w-10" alt="tailus logo" /> */}
          <h2 class="mt-20 mb-8 text-3xl font-bold text-gray-800 dark:text-black">Reset Your Password.</h2>
          <form onSubmit={formHandler} class="space-y-8">
            <div class="space-y-4">
              <label for="username" class=" text-lg text-gray-600 dark:text-gray-800">What's your email address?</label>
              <div class="relative flex items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute left-4 inset-y-0 my-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>                      
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  placeholder="Phone number or email"
                  class="focus:outline-none block w-full rounded-full placeholder-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                /> */}

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
        '& label.Mui-focused' : {color: 'white'}
        // '& .MuiOutlinedInput-root': {
        //   '& fieldset': {
        //     borderColor: 'white'
        //   },
        //   '&:hover fieldset': {
        //     borderColor: 'white'
        //   }}
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          id="outlined"
          label="Email Address"
          InputLabelProps={{
            style: { color: 'black' },
            textInput : {
              color: 'black'
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle style={{color: "white"}} />
              </InputAdornment>
            )
          }}
        />
      </div>
      </Box>


                <div class="absolute right-9 ">
                  <button type="submit" class="relative rounded-md flex h-10 w-10 sm:w-max  ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full dark:bg-blue-500 before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span class="hidden relative text-base font-semibold text-white dark:text-gray-900 sm:block ">Submit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="relative w-5 h-5 text-white dark:text-gray-900 sm:hidden">
                      <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>                      
                  </button>
                </div>
              </div>
            </div>
            <p class="text-gray-500 text-lg">Enter your user account's verified email address and we will send you a password reset link.</p>

            <p class="border-t text-Xl font-semibold border-gray-100 dark:border-gray-800 pt-6 text-gray-500 dark:text-gray-600">
              Already have an account ?
              <Link to = "/"  class="text-xl pl-2 text-blue-600 font-semibold dark:text-blue-500">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}

export default ForgotPassword;