"use client";

import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const q = searchParams.get("q") || "";

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newQ = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        if (newQ) {
            params.set("q", newQ);
        } else {
            params.delete("q");
        }
        replace(`?${params.toString()}`);
    };

    return (
        <input
            className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
            type="text"
            value={q}
            onChange={onChange}
            defaultValue={searchParams.get('query')?.toString()}
            placeholder="Search..."
        />
    );
};

export default SearchBox;