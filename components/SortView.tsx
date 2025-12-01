"use client";

import { useRouter, useSearchParams } from "next/navigation";


const SortView = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const sort = searchParams.get("sort") || "";

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (newSort) {
            params.set("sort", newSort);
        } else {
            params.delete("sort");
        }
        replace(`?${params.toString()}`);
        
    }

    return (
        <div>

            <select value={sort} onChange={handleSortChange} name="sort" id="sort" className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 rounded-lg p-2 mb-4">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="most_liked">Most Liked</option>
            </select>

        </div>
    )
}

export default SortView;