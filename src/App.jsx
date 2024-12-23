import './App.css'
import HomePage from "./page/HomePage.jsx";
import {AuthProvider} from "./util/auth/AuthProvider.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {SigninPage} from "./page/SigninPage.jsx";
import {SignupPage} from "./page/SignupPage.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {SignUpProvider} from "./component/SignUpComponent/Context/UseSignup.jsx";
import {SighInProvider} from "./component/SigninComponent/Context/SignInProvider.jsx";


function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthProvider>
            <Router>
                <SignUpProvider>
                    <SighInProvider>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/signin" element={<SigninPage/>}/>
                            <Route path="/signup" element={<SignupPage/>}/>
                        </Routes>
                    </SighInProvider>
                </SignUpProvider>
            </Router>
        </AuthProvider>
      </LocalizationProvider>
  )
}

export default App
