'use server'

import { addPost, loginUser } from "@/database/database";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

interface CreatePostState {
    success: boolean;
    message: string;
}

export const createPost = async (prevState: CreatePostState, formData: FormData) => {
    const text = formData.get('text')?.toString() || '';

    if (text.trim().length === 0) {
        return {
            success: false,
            message: 'Post text cannot be empty.'
        }
    }

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get("jwt");

    if (!jwtCookie) {
        return {
            success: false,
            message: 'User not authenticated.'
        }
    }

    let {username} = jwt.decode(jwtCookie.value) as { username: string };

    await addPost(text, username);

    revalidatePath('/');

    return {
        success: true,
        message: 'Post created successfully!'
    }
}

export interface LoginState {
    success: boolean;
    message: string;
}

export const login = async (prevState: CreatePostState, formData: FormData) => {
    try {
        const username = formData.get('username')?.toString() || '';
        const password = formData.get('password')?.toString() || '';

        let profile = await loginUser(username, password);

        const cookieStore = await cookies();

        const token = jwt.sign(profile, process.env.JWT_SECRET!, { expiresIn: "7d" });

        cookieStore.set({
            name: "jwt",
            value: token,
            httpOnly: true,
            sameSite: "lax",
            secure: true,
        });

        

        return {
            success: true,
            message: 'Login successful!'
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message || 'Login failed.'
        }
    }
}