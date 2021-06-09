import { useForm, ValidationError } from '@formspree/react'

export const GetInTouch: React.VFC = () => {
    const [state, handleSubmit] = useForm('xdoyzojr')
    if (state.succeeded) {
        return <p>Thanks for the message! I&apos;ll reply as soon as possible :)</p>
    }
    return (
        <div className="pb-6 xl:pb-8">
            <h3 className="tracking-widest font-bold mb-1">GET IN TOUCH</h3>

            <form onSubmit={handleSubmit} className="max-w-md">
                <label htmlFor="email" className="block text-sm font-medium text-nord3">
                    Your Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="shadow-sm focus:ring-nord8 focus:border-nord8 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <div className="mt-2 sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-nord3">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="max-w-lg shadow-sm block w-full focus:ring-nord8 focus:border-nord8 sm:text-sm border border-gray-300 rounded-md"
                        defaultValue={''}
                    />
                </div>

                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-nord8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nord6"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
