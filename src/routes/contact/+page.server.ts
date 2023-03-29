import type { Actions } from './$types';

export const actions = {
    default: async ({ fetch, request }) => {
        const data = await request.formData();

        // access data
        console.log(data);

        if (Math.random() >= 0.5)
            return { success: true };


        return { success: false };
    }
} satisfies Actions;