
import { Post } from "@/types";
import Link from "next/link";

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
                <Link href={`/${post.username}`}>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@{post.username}</p>
                </div>
                </Link>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-2">{post.text}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">{post.createdOn.split('T')[0]} {post.createdOn.split('T')[1].split('.')[0]}</p>
        </div>
    );
};

export const PostCardSkeleton = () => {
    return (
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-zinc-800/50 animate-pulse">
            <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-700 rounded-full mr-3" />
                <div>
                    <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-32 mb-1" />
                    <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded w-24" />
                </div>
            </div>
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-5/6 mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-zinc-600 rounded w-32 mb-4" />
            <div className="h-8 w-20 bg-gray-200 dark:bg-zinc-700 rounded" />
        </div>
    );
};

export default PostCard;