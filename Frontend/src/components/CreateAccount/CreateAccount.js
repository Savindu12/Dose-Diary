import React from "react";
import { useState } from "react";
import LoginBackground from "../../assets/CreateAcc.jpg"
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
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link, useNavigate } from "react-router-dom";


function CreateAccount () {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const backgroundImageStyle = {
        backgroundImage: `url("${LoginBackground}")`,
        backgroundSize: "cover",
    };

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const createACCHandler = async (event) => {
        event.preventDefault();

        // try {
        //     await authService.signUp(firstName, lastName, userName, email, password, confirmPassword).then (
        //         (response) => {
        //             navigate("/");
        //             window.location.reload();
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );

        // } catch (error) {
        //     console.log(error);
        // }
    }

    return(
        <div class=" py-6 min-h-screen" style={backgroundImageStyle}>
            <div class="container m-auto px-6 text-gray-500 relative " >
                <div class="m-auto space-y-8 inline-block ml-12">
                    <img src="images/tailus.svg" loading="lazy" class="ml-4 w-36" alt="tailus logo" />
                    <div class="rounded-3xl border border-gray-100 shadow-gray-600/10 backdrop-blur-2xl">
                        <div class="p-8 py-12 sm:p-16">
                            <h2 class="pb-3 text-4xl font-bold text-gray-800 dark:text-blue-900">Create New Account</h2>
                            <p class="text-lg tracking-wide text-gray-500 dark:text-gray-600 pb-6">
                                Already have an account?
                                <Link to="/login" class="tracking-wide font-semibold text-blue-600 dark:text-blue-600"> Sign In</Link>
                            </p>

                            <form onSubmit={createACCHandler} class="space-y-8">
                                <div class="grid grid-cols-2 gap-3">
                                    <div>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '26ch' },
                                                '& label.Mui-focused': { color: 'black' },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'blue'
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'blue'
                                                    }
                                                }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>
                                                <TextField
                                                    id="outlined"
                                                    label="First Name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { color: 'black' },
                                                        textInput: {
                                                            color: 'black'
                                                        }
                                                    }}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PersonOutlineOutlinedIcon style={{ color: "black" }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </Box>

                                    </div>
                                    <div>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25.5ch' },
                                                '& label.Mui-focused': { color: 'blue' },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'blue'
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'blue'
                                                    }
                                                }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>
                                                <TextField
                                                    id="outlined"
                                                    label="Last Name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { color: 'black' },
                                                        textInput: {
                                                            color: 'black'
                                                        }
                                                    }}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PersonOutlineOutlinedIcon style={{ color: "black" }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </Box>

                                    </div>

                                    <div class="col-span-2">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '55ch' },
                                                '& label.Mui-focused': { color: 'blue' },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'blue'
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'blue'
                                                    }
                                                }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>
                                                <TextField
                                                    id="outlined"
                                                    label="Username"
                                                    value={userName}
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { color: 'black' },
                                                        textInput: {
                                                            color: 'black'
                                                        }
                                                    }}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <AccountCircle style={{ color: "black" }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </Box>

                                    </div>

                                    <div class="col-span-2">
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '55ch' },
                                                '& label.Mui-focused': { color: 'blue' },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'blue'
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'blue'
                                                    }
                                                }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>
                                                <TextField
                                                    id="outlined"
                                                    label="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    InputLabelProps={{
                                                        style: { color: 'black' },
                                                        textInput: {
                                                            color: 'black'
                                                        }
                                                    }}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <MailOutlinedIcon style={{ color: "black" }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </Box>
                                    </div>
                                    <div class="col-span-2 ">
                                        <div>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <div>
                                                    <FormControl sx={{
                                                        m: 1, width: '55ch', '& label.Mui-focused': { color: 'blue' },
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'blue'
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'blue'
                                                            }
                                                        }
                                                    }}

                                                        variant="outlined">

                                                        <InputLabel htmlFor="outlined-adornment-password" 
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                         >Password</InputLabel>

                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}

                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                        style={{ color: "black" }}
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

                                        <div class="col-span-2">
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <div>
                                                    <FormControl sx={{
                                                        m: 1, width: '55ch', '& label.Mui-focused': { color: 'black' },
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'blue'
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'blue'
                                                            }
                                                        }
                                                    }}

                                                        variant="outlined">

                                                        <InputLabel htmlFor="outlined-adornment-password" 
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}>Confirm Password</InputLabel>

                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}

                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                        style={{ color: "black" }}
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton >
                                                                </InputAdornment>
                                                            }
                                                            label="Confirm Password"
                                                        />
                                                    </FormControl>
                                                </div>
                                            </Box>
                                        </div>

                                    </div>
                                </div>

                                <button type="submit" class="relative rounded-lg flex h-11 w-full items-center justify-center dark:bg-blue-500 px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span class="relative text-lg font-semibold text-white dark:text-dark">Create new account</span>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div class="space-x-4 text-center text-gray-500">
              <span>&copy; tailus</span>
              <a href="#" class="text-sm hover:text-primary">Contact</a>
            </div> */}
        </div>
    )
}

export default CreateAccount;