import { getPostsByUsername } from "@/database/database";
import Pagination from "./Pagination";
import PostCard from "./PostCard";
import { PostCardSkeleton } from "./PostCard";


interface UserPostListProps {
    username: string;
    sort: string;
    currentPage: number;
}

const UserPostList = async({username, sort = "newest", currentPage = 1} : UserPostListProps) => {
    const {posts, pages } = await getPostsByUsername(username, sort, currentPage);

    return (
        <div className="flex-1 flex-col gap-4">
            <div className="mb-4">
                <Pagination pageCount={pages} currentPage={currentPage} />
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

export default UserPostList;