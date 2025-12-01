import { Post } from "@/types";
import LikeButton from "./LikeButton";

export interface PostCardProps {
    post: Post;
}

const PostCard = ({post} : PostCardProps) => { 
    return (
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-zinc-800/50">
            <div className="flex items-center mb-2">
                {post.profile && (
                    <img 
                        src={post.profile.avatarUrl}
                        alt={`${post.profile.name}'s avatar`}
                        className="w-10 h-10 rounded-full mr-3 ring-2 ring-gray-200 dark:ring-gray-700"
                    />
                )}
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@{post.username}</p>
                </div>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-2">{post.text}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">{post.createdOn.split('T')[0]} {post.createdOn.split('T')[1].split('.')[0]}</p>

            <LikeButton post={post}/>
        </div>
    );
};

export default PostCard;