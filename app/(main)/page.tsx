
import PostList, { PostListSkeleton } from "@/components/PostList";
import SearchBox from "@/components/SearchBox";
import SortView from "@/components/SortView";
import { Suspense } from "react";

export default async function Home(props: PageProps<"/">) {

    const searchParams = await props.searchParams;
    const q = typeof searchParams.q === "string" ? searchParams.q : "";
    const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest";
    const currentPage = typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

    return (
        <div className="flex min-h-screen flex-col items-stretch justify-center p-4 bg-zinc-50 font-sans dark:bg-black">
            <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-4">
                    <SortView />
                    <SearchBox />
                </div>
                <div className="flex justify-center mb-5">
                    <Suspense fallback={<PostListSkeleton/>}>
                        <PostList q={q} sort={sort} currentPage={currentPage} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
