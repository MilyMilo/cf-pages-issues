import type { Actions } from './$types';
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
    apiKey: 'dummy-test',
    apiSecret: 'dummy-test'
});

export const actions = {
    default: async ({ fetch, request }) => {
        const data = await request.formData();

        // access data
        console.log(data);

        if (Math.random() >= 0.5) {
            await mailjet.post('send').request({
                FromEmail: 'whatever@example.com',
                FromName: 'whatever',
                Subject: 'whatever',
                'Text-part': 'whatever',
                Recipients: [{ Email: 'whatever@example.com' }],
                Headers: { 'Reply-To': 'whatever@example.com' }
            });
        }

        return { success: false };
    }
} satisfies Actions;