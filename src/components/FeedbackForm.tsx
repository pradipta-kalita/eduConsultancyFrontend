import { useState } from 'react'

export default function FeedbackForm() {
    const [message, setMessage] = useState<string | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const feedback = formData.get('feedback') as string

        // Here you would typically send the feedback to your backend API
        // For demonstration, we'll just simulate a successful submission
        if (name && email && feedback) {
            setMessage('Thank you for your feedback!')
            event.currentTarget.reset() // Clear the form
        } else {
            setMessage('Please fill in all fields')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                    Feedback
                </label>
                <textarea
                    id="feedback"
                    name="feedback"
                    rows={4}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit Feedback
            </button>
            {message && (
                <div className={`mt-4 ${message.includes('Thank you') ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'} px-4 py-3 rounded relative`} role="alert">
                    <span className="block sm:inline">{message}</span>
                </div>
            )}
        </form>
    )
}