import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          We’re glad you’re back!
        </h2>
        <p className="font-bold text-center mb-8 text-gray-600">
          Login to continue your study abroad journey!
        </p>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-gray-600">
          <Link
            to="/auth/forgot-password"
            className="text-primary-light hover:underline"
          >
            Forgot your password?
          </Link>
        </p>
      </div>
    </div>
  )
}
