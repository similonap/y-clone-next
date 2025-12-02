"use client";

import { createPost } from "@/actions/actions";
import { useActionState } from "react";

const PostMessage = () => {
    const [state, action, pending] = useActionState(createPost, { success: false, message: "" });

    return (
        <div>
            <form action={action} className="mb-4">
                {
                    state.message && (
                        <div className={`mb-2 p-2 rounded-lg ${state.success ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200' : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'}`}>
                            {state.message}
                        </div>
                    )
                }
                <textarea
                    name="text"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                    placeholder="Write your post here..."
                    rows={4}
                ></textarea>
                <button
                    className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-2xl"
                >
                    { pending ? "Posting..." : "Post Message" }
                </button>
            </form>
        </div>
    );
}

export default PostMessage;