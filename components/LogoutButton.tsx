import { logout } from "@/actions/actions";

const LogoutButton = () => {
    return (
        <form action={logout} className="flex justify-end mb-4">
            <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                Logout
            </button>
        </form>
    );
}

export default LogoutButton;