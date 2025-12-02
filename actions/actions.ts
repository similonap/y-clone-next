'use server'

import { addPost } from "@/database/database";
import { revalidatePath } from "next/cache";

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

    await addPost(text);

    revalidatePath('/');

    return {
        success: true,
        message: 'Post created successfully!'
    }
}

export interface FormState {}