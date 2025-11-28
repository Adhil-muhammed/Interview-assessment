import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { InputHTMLAttributes } from "react"

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  onClearError?: () => void
}

export const FormField = ({
  label,
  error,
  onClearError,
  id,
  className = "",
  ...props
}: FormFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error && onClearError) {
      onClearError()
    }
    props.onChange?.(e)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-700">
        {label}
      </Label>
      <Input
        id={id}
        {...props}
        onChange={handleChange}
        className={error ? `border-red-500 focus-visible:ring-red-500 ${className}` : className}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

