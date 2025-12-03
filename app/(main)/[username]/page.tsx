import UserPostList from "@/components/UserPostList";
import { getProfileByUsername } from "@/database/database";
import Image from "next/image";

const ProfilePage = async (props: PageProps<"/[username]">) => {
    const { username } = await props.params;

    const searchParams = await props.searchParams;
    const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest";
    const currentPage = typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

    let profile = await getProfileByUsername(username);

    return (
        <div>
            <Image src={profile.bannerUrl} alt={`${profile.name}'s banner`} width={800} height={200} className="w-full h-64 object-cover mb-4" />

            <Image src={profile.avatarUrl} alt={`${profile.name}'s avatar`} width={100} height={100} className="w-24 h-24 rounded-full -mt-12 ml-4 ring-4 ring-white dark:ring-black" />

            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{profile.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">@{profile.username}</p>
                <p className="mt-2 text-gray-800 dark:text-gray-200">{profile.bio}</p>
            </div>

            <UserPostList username={username} sort={sort} currentPage={currentPage} />  

            
        </div>

    )
}

export default ProfilePage;