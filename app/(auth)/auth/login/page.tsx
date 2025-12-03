"use client";

import { useActionState, useEffect } from "react";
import { login } from "@/actions/actions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const [state, action, pending] = useActionState(login, { success: false, message: "" });
    const router = useRouter();
    useEffect(() => {
        if (state.success) {
            router.replace('/');
        }
    }, [state.success]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-8">Login Page</h1>
            {
                (state.message && !state.success) && (
                    <div className={`mb-4 p-2 rounded-lg bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200`}>
                        {state.message}
                    </div>
                )
            }
            <form className="w-full max-w-sm" action={action}>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-zinc-900"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-zinc-900"
                        name="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        disabled={pending}
                        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>

            </form>
        </div>
    );
};

export default LoginPage;