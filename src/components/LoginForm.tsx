import { useState } from 'react'

export default function LoginForm() {
    // @ts-ignore
    const [error, setError] = useState<string | null>(null)



    return (
        <form className="space-y-4 w-full max-w-md">
            <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required />
            </div>
            {error && (
                // <Alert variant="destructive">
                //     <AlertDescription>{error}</AlertDescription>
                // </Alert>
                <p>
                    Something went wrong
                </p>
            )}
            <button type="submit" className="w-full">Log in</button>
            <div className="text-center space-y-2">
                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                </a>
                <div className="text-sm">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </div>
            </div>
        </form>
    )
}

