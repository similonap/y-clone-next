"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const [q, setQ] = useState<string>(searchParams.get("q") || "");
    const { replace } = useRouter();

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString());
        if (q) {
            params.set("q", q);
        } else {
            params.delete("q");
        }
        replace(`?${params.toString()}`);
    };


    return (
        <form onSubmit={onSubmit} className="w-full flex flex-row items-stretch">
            <input
                className="flex-1 w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100"
                type="text"
                onChange={(e) => setQ(e.target.value)}
                value={q}
                defaultValue={searchParams.get('query')?.toString()}
                placeholder="Search..."
            />

            <button type="submit" className="h-10 ml-2 bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-2xl">
                Search
            </button>
        </form>
    );
};

export default SearchBox;