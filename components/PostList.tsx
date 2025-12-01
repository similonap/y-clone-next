import { getPagesCount, getPosts } from "@/database/database";
import Pagination from "./Pagination";
import PostCard from "./PostCard";
import { PostCardSkeleton } from "./PostCard";

interface PostListProps {
    q: string;
    sort: string;
    currentPage: number;
}

const PostList = async({q, sort, currentPage} : PostListProps) => {
    const posts = await getPosts(q, sort, currentPage);
    const pageCount = await getPagesCount(q);

    return (
        <div className="flex-1 flex-col gap-4">
            <div className="mb-4">
                <Pagination pageCount={pageCount} currentPage={currentPage} />
            </div>
            {posts.map((post, index) => <PostCard key={index} post={post} />)}
        </div>
    );
}

export const PostListSkeleton = () => {
    return (
        <div className="flex-1 flex-col gap-4">
            <div className="mb-4 grayscale">
                <Pagination pageCount={1} currentPage={1} />
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
                <PostCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default PostList;