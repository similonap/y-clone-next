import { increaseLikes } from "@/database/database";
import { Post } from "@/types";
import { revalidatePath } from "next/cache";
import { FaThumbsUp } from "react-icons/fa";


export interface LikeButtonProps {
    post: Post;
}

const LikeButton = ({post} : LikeButtonProps) => { 
    async function like(postId: string) {
        'use server'

        await increaseLikes(postId);

        revalidatePath('/');
    }


    return (
        <form action={like.bind(null, post._id.toString())}>
            <button className="flex items-center cursor-pointer bg-black pl-4 pr-4 pt-1 pb-1 rounded-2xl text-white hover:text-yellow-200 mt-2">
                <FaThumbsUp className="mr-1"/>
                <span>{post.likes}</span>
            </button>
        </form>
    );
};

export default LikeButton;