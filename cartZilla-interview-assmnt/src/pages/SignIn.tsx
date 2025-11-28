import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/forms/FormField"
import { PasswordField } from "@/components/forms/PasswordField"
import { CheckboxField } from "@/components/forms/CheckboxField"
import { SocialLoginButtons } from "@/components/forms/SocialLoginButtons"
import { Logo } from "@/components/layout/Logo"
import { Divider } from "@/components/layout/Divider"
import { PageFooter } from "@/components/layout/PageFooter"

interface FormErrors {
  email?: string
  password?: string
}

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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
        <Logo />

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
          <FormField
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClearError={() => setErrors({ ...errors, email: undefined })}
            error={errors.email}
            placeholder="Enter your email"
          />

          <PasswordField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClearError={() => setErrors({ ...errors, password: undefined })}
            error={errors.password}
            placeholder="Enter your password"
          />

          {/* Checkbox */}
          <div className="flex items-center justify-between">
            <CheckboxField
              id="save-password"
              checked={savePassword}
              onCheckedChange={setSavePassword}
              label="Save the password"
            />
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

        <Divider />
        <SocialLoginButtons />
        <PageFooter />
      </div>
    </div>
  )
}

