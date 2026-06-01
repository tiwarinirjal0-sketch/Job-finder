import { useContext, useState } from "react"
import { JobContext } from "../../../context/jobs"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const navigate = useNavigate()
  const [signUp, setSignUp] = useState(true)
  const { signUpClicked } = useContext(JobContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [userNameErr, setUserNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [passErr, setPassErr] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const register = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userName, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        if (data.error === "Username err") setUserNameErr(true)
        else setEmailErr(true)
        return
      }
      localStorage.setItem("token", data.token)
      handleTabSwitch(false)
    } catch (error) {
      console.log("error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogIn = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) return
      localStorage.setItem("token", data.token)
      navigate("/")
    } catch (error) {
      console.log("error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTabSwitch = (isSignUp) => {
    setSignUp(isSignUp)
    setUserNameErr(false)
    setEmailErr(false)
    setPassErr(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 p-4">
      <div className="w-full max-w-sm bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8 flex flex-col items-center shadow-2xl">

        {/* Logo */}
        <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-white text-xl font-bold text-center mb-1">
          {signUp ? "Create account" : "Welcome back"}
        </h1>
        <p className="text-white/40 text-sm text-center mb-5">
          {signUp ? "Start your journey today." : "Sign in to continue."}
        </p>

        {/* Tab switcher */}
        <div className="flex w-full bg-white/6 rounded-xl p-1 gap-1 mb-5">
          <button
            onClick={() => handleTabSwitch(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              signUp ? "bg-white/12 text-white" : "text-white/40 hover:text-white/60"
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => handleTabSwitch(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              !signUp ? "bg-white/12 text-white" : "text-white/40 hover:text-white/60"
            }`}
          >
            Log in
          </button>
        </div>

        {/* Fields */}
        <div className="w-full flex flex-col gap-4">
          {signUp && (
            <div>
              <label className="block text-xs font-medium text-white/55 mb-1.5">Username</label>
              <input
                type="text"
                placeholder="your_username"
                onChange={(e) => { setUserName(e.target.value); setUserNameErr(false) }}
                className={`w-full px-3 py-2.5 rounded-xl text-sm text-white placeholder-white/25 bg-white/7 border outline-none transition-colors ${
                  userNameErr
                    ? "border-red-400/60 bg-red-500/5 focus:border-red-400"
                    : "border-white/12 focus:border-indigo-400/70"
                }`}
              />
              {userNameErr && <p className="text-red-400 text-xs mt-1.5">⚠ Username already taken or invalid</p>}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-white/55 mb-1.5">Email</label>
            <input
              type="text"
              placeholder="you@example.com"
              onChange={(e) => { setEmail(e.target.value); setEmailErr(false) }}
              className={`w-full px-3 py-2.5 rounded-xl text-sm text-white placeholder-white/25 bg-white/7 border outline-none transition-colors ${
                emailErr
                  ? "border-red-400/60 bg-red-500/5 focus:border-red-400"
                  : "border-white/12 focus:border-indigo-400/70"
              }`}
            />
            {emailErr && <p className="text-red-400 text-xs mt-1.5">⚠ Email already in use or invalid</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-white/55 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2.5 rounded-xl text-sm text-white placeholder-white/25 bg-white/7 border outline-none transition-colors ${
                passErr
                  ? "border-red-400/60 bg-red-500/5 focus:border-red-400"
                  : "border-white/12 focus:border-indigo-400/70"
              }`}
            />
            {passErr && <p className="text-red-400 text-xs mt-1.5">⚠ Incorrect password</p>}
          </div>

          <button
            onClick={signUp ? register : handleLogIn}
            disabled={isLoading}
            className="w-full mt-1 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-sm font-semibold transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
              </span>
            ) : (
              signUp ? "Create account →" : "Log in →"
            )}
          </button>
        </div>

        {loggedIn && (
          <div className="mt-4 w-full px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-sm text-center">
            ✓ Logged in successfully
          </div>
        )}

        <p className="mt-4 text-xs text-white/35 text-center">
          {signUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => handleTabSwitch(!signUp)}
            className="text-indigo-300/90 underline underline-offset-2 decoration-indigo-400/30 hover:text-indigo-300"
          >
            {signUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  )
}