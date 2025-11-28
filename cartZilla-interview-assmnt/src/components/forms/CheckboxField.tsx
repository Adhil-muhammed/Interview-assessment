import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface CheckboxFieldProps {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  linkText?: string
  linkTo?: string
  error?: string
  className?: string
}

export const CheckboxField = ({
  id,
  checked,
  onCheckedChange,
  label,
  linkText,
  linkTo,
  error,
  className = "",
}: CheckboxFieldProps) => {
  return (
    <div className={className}>
      <div className="flex items-start space-x-2">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(checked) => onCheckedChange(checked === true)}
          className="mt-0.5"
        />
        <Label
          htmlFor={id}
          className="text-sm text-gray-700 font-normal cursor-pointer"
        >
          {label}
          {linkText && linkTo && (
            <>
              {" "}
              <Link to={linkTo} className="text-[#DC2626] hover:underline">
                {linkText}
              </Link>
            </>
          )}
        </Label>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}

