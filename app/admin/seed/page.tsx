import { seedDatabase } from "@/database/database"

const SeedDatabase = async() => {
    const { posts, profiles } = await seedDatabase();
    
    return (
        <div>
            Seeded {posts.length} posts and {profiles.length} profiles.
        </div>
    )
}
export default SeedDatabase;