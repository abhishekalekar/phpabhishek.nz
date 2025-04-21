import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export function Logo({ className = "", size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  }

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg transform rotate-3"></div>
        <div className="relative bg-white dark:bg-gray-900 rounded-lg p-2 border-2 border-blue-600 z-10">
          <span
            className={`font-bold ${sizeClasses[size]} text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400`}
          >
            pA
          </span>
        </div>
      </div>
      <div className="font-bold tracking-tight">
        <span className={`${sizeClasses[size]} text-primary`}>php</span>
        <span className={`${sizeClasses[size]} text-blue-600`}>abhishek</span>
      </div>
    </Link>
  )
}
