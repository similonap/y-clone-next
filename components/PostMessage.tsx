import { addPost } from "@/database/database";
import { revalidatePath } from "next/cache";

const PostMessage = () => {

    const createPost = async (formData: FormData) => {
        'use server'

        const text = formData.get('text')?.toString() || '';

        await addPost(text);

        revalidatePath('/');
    }


    return (
        <div>
            <form action={createPost} className="mb-4"> 
                <textarea
                    name="text"
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-2 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                    placeholder="Write your post here..."   
                    rows={4}
                ></textarea>
                <button
                    className="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-2xl"
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default PostMessage;