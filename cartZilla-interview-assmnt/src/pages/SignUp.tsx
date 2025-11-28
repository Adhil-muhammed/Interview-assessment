import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, Settings, Gift, Percent, Heart, Clock } from "lucide-react"
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
  privacyPolicy?: string
}

export const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [savePassword, setSavePassword] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string): boolean => {
    return password.length >= 8
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
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!acceptPrivacy) {
      newErrors.privacyPolicy = "You must accept the Privacy Policy"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      console.log("Form submitted:", { email, password, savePassword })
    }
  }

  const benefits = [
    { icon: Mail, text: "Subscribe to your favorite products" },
    { icon: Settings, text: "View and manage your orders and wishlist" },
    { icon: Gift, text: "Earn rewards for future purchases" },
    { icon: Percent, text: "Receive exclusive offers and discounts" },
    { icon: Heart, text: "Create multiple wishlists" },
    { icon: Clock, text: "Pay for purchases by installments" },
  ]

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-between bg-white p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="max-w-md mx-auto w-full">
          <Logo />

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 leading-tight">Create an account</h1>
          <p className="text-gray-600 mb-8 text-base">
            I already have an account.{" "}
            <Link to="/signin" className="text-[#DC2626] hover:underline font-medium">
              Sign in
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
              placeholder="Minimum 8 characters"
            />

            {/* Checkboxes */}
            <div className="space-y-4">
              <CheckboxField
                id="save-password"
                checked={savePassword}
                onCheckedChange={setSavePassword}
                label="Save the password"
              />

              <CheckboxField
                id="privacy-policy"
                checked={acceptPrivacy}
                onCheckedChange={(checked) => {
                  setAcceptPrivacy(checked)
                  if (errors.privacyPolicy) {
                    setErrors({ ...errors, privacyPolicy: undefined })
                  }
                }}
                label="I have read and accept the"
                linkText="Privacy Policy"
                linkTo="#"
                error={errors.privacyPolicy}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white h-12 text-base font-medium rounded-lg shadow-sm transition-colors"
            >
              Create an account
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>
          </form>

          <Divider />
          <SocialLoginButtons />
        </div>

        {/* Footer */}
        <div className="max-w-md mx-auto w-full mt-8">
          <PageFooter />
        </div>
      </div>

      {/* Right Section - Benefits */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 p-12 xl:p-16 flex-col justify-center">
        <h2 className="text-center text-2xl xl:text-3xl font-bold text-black mb-12 xl:mb-16">Cartzilla account benefits</h2>
        <div className="grid grid-cols-2 gap-6 xl:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white-50/80 rounded-lg p-6 xl:p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-sm">
                  <Icon className="h-8 w-8 xl:h-10 xl:w-10 text-blue-700" />
                </div>
                <p className="text-sm xl:text-base text-gray-700 font-medium leading-relaxed">{benefit.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

