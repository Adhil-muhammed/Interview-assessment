import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface FormErrors {
  email?: string
  password?: string
}

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [savePassword, setSavePassword] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      console.log("Form submitted:", { email, password, savePassword })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 sm:p-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-10 h-10 bg-[#DC2626] rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl">z</span>
          </div>
          <span className="text-2xl font-bold text-black">Cartzilla</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 leading-tight">Sign in</h1>
        <p className="text-gray-600 mb-8 text-base">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#DC2626] hover:underline font-medium">
            Create an account
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) {
                  setErrors({ ...errors, email: undefined })
                }
              }}
                className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (errors.password) {
                    setErrors({ ...errors, password: undefined })
                  }
                }}
                className={errors.password ? "border-red-500 pr-10 focus-visible:ring-red-500" : "pr-10"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="save-password"
                checked={savePassword}
                onCheckedChange={(checked) => setSavePassword(checked === true)}
              />
              <Label
                htmlFor="save-password"
                className="text-sm text-gray-700 font-normal cursor-pointer"
              >
                Save the password
              </Label>
            </div>
            <Link to="#" className="text-sm text-[#DC2626] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white h-12 text-base font-medium rounded-lg shadow-sm transition-colors"
          >
            Sign in
            <ArrowRight className="h-5 w-5 ml-1" />
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <Button
              type="button"
              variant="outline"
              className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-2"
            >
              <span className="text-lg font-bold text-[#4285F4]">G</span>
              <span className="text-sm hidden sm:inline">Google</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-2"
            >
              <span className="text-lg font-bold text-[#1877F2]">f</span>
              <span className="text-sm hidden sm:inline">Facebook</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center"
            >
              <span className="text-base font-semibold">Apple</span>
            </Button>
          </div>

        {/* Footer */}
        <div className="mt-8">
          <Link to="#" className="text-sm text-gray-600 hover:text-gray-800 block mb-2">
            Need help?
          </Link>
          <p className="text-xs text-gray-500">
            © All rights reserved. Made by Coderthemes
          </p>
        </div>
      </div>
    </div>
  )
}

