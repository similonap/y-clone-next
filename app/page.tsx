import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import PostMessage from "@/components/PostMessage";
import SearchBox from "@/components/SearchBox";
import SortView from "@/components/SortView";
import { getPagesCount, getPosts } from "@/database/database";

export default async function Home(props: PageProps<"/">) {

    const searchParams = await props.searchParams;
    const q = typeof searchParams.q === "string" ? searchParams.q : "";
    const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest";
    const currentPage = typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

    const posts = await getPosts(q, sort, currentPage);
    const pageCount = await getPagesCount(q);

    return (
        <div className="flex min-h-screen flex-col items-stretch justify-center p-4 bg-zinc-50 font-sans dark:bg-black">
            <PostMessage />

            <div className="flex items-center justify-between gap-4">
                <SortView />
                <SearchBox />
            </div>
            <div className="flex justify-center mb-5">
                <Pagination pageCount={pageCount} currentPage={currentPage} />
            </div>
            {
                posts.map((post, index) => <PostCard key={index} post={post} />)
            }


        </div>
    );
}
