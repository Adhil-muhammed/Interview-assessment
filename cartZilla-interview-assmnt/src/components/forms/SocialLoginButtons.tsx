import { Button } from "@/components/ui/button"
import googleIcon from "@/assets/google-icon.png"
import facebookIcon from "@/assets/facebook-icon.png"
import appleIcon from "@/assets/apple-icon.png"

export const SocialLoginButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      <Button
        type="button"
        variant="outline"
        className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-2"
      >
        <img src={googleIcon} alt="Google" className="h-5 w-5" />
        <span className="text-sm hidden sm:inline">Google</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-2"
      >
        <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
        <span className="text-sm hidden sm:inline">Facebook</span>
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-12 border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-2"
      >
        <img src={appleIcon} alt="Apple" className="h-5 w-5" />
        <span className="text-sm hidden sm:inline">Apple</span>
      </Button>
    </div>
  )
}

