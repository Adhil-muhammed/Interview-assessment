import { Link } from "react-router-dom"

export const PageFooter = () => {
  return (
    <div className="mt-8">
      <Link to="#" className="text-sm text-gray-600 hover:text-gray-800 block mb-2">
        Need help?
      </Link>
      <p className="text-xs text-gray-500">
        © All rights reserved. Made by Coderthemes
      </p>
    </div>
  )
}

