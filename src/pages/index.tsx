import { useState } from "react";
import {
  Box,
  alpha,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const LogIn = () => {
  const color = "linear-gradient(to right,#65d0fc, #20bdff, #4f52f7,#9294f7)";
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Password validation
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    if (!lowercaseRegex.test(password)) {
      setPasswordError("Password must include a lowercase letter");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      setPasswordError("Password must include an uppercase letter");
      return;
    }
    if (!numberRegex.test(password)) {
      setPasswordError("Password must include a number");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    // If password passes all checks, proceed with form submission or other actions
    console.log("Password is valid");
    // Add your desired actions here
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "#fff",
          width: "1000px",
          height: "500px",
          boxShadow: "1",
        }}
      >
        <Box
          sx={{
            background: color,
            width: "50%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            maxWidth={"300px"}
            sx={{
              backgroundColor: alpha("#ffffff", 0.2),
              padding: "30px",
              backdropFilter: "blur(50px)",
            }}
          >
            <Typography variant="h3" color={"white"}>
              <PlayArrowIcon fontSize="large" /> Digital platform for distance{" "}
              <span style={{ color: "black" }}>learning.</span>
            </Typography>
            <Typography color={"white"} variant="caption">
              You will never know everything but you will know more.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <Stack maxWidth={"300px"} maxHeight={"100%"} spacing={1}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Hey, hello 👋
            </Typography>
            <Typography variant="inherit" sx={{ fontSize: "14px" }}>
              Enter the information you entered while registering
            </Typography>
            <FormControl error={Boolean(passwordError)}>
              <TextField
                required
                type="email"
                variant="standard"
                label="Email"
              />
              <TextField
                required
                type="password"
                variant="standard"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                error={Boolean(passwordError)}
              />
              {passwordError && (
                <FormHelperText>{passwordError}</FormHelperText>
              )}
              <Box>
                <FormControlLabel
                  sx={{
                    width: "150px",
                    transform: "scale(0.7)", // Adjust the scale value as per your requirement
                    transformOrigin: "top left",
                  }}
                  control={<Checkbox sx={{ color: color }} />}
                  label="Remember me"
                />
                <Link
                  href="#"
                  underline="none"
                  color={color}
                  sx={{ fontSize: "15px", float: "right" }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <Button
                variant="text"
                type="submit"
                size="small"
                sx={{ background: color, color: "#fff" }}
                onClick={handleFormSubmit}
              >
                Login
              </Button>
              <Divider />
              <Button
                size="small"
                sx={{ backgroundColor: "#fff", border: "1px solid" }}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#4285F4"
                    d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                  ></path>
                  <path
                    fill="#EA4335"
                    d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                  ></path>
                </svg>
                Sign in with Google
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
