import type { Actions } from './$types';
import Mailjet from 'node-mailjet';

export const actions = {
    default: async ({ fetch, request }) => {
        const mailjet = new Mailjet({
            apiKey: 'dummy-test',
            apiSecret: 'dummy-test'
        });

        const data = await request.formData();

        // access data
        console.log(data);

        try {
            await mailjet.post('send').request({
                FromEmail: 'whatever@example.com',
                FromName: 'whatever',
                Subject: 'whatever',
                'Text-part': 'whatever',
                Recipients: [{ Email: 'whatever@example.com' }],
                Headers: { 'Reply-To': 'whatever@example.com' }
            });
        } catch (e) {
            // expected to fail with these credentials - but I just want to see if it can render
            return { success: false };
        }

        return { success: true };
    }
} satisfies Actions;