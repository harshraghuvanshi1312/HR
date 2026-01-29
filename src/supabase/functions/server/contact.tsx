import { Context } from 'npm:hono';
import * as kv from './kv_store.tsx';

export async function handleContactSubmission(c: Context) {
  try {
    const { name, email, message } = await c.req.json();

    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Create a unique key for this submission
    const timestamp = new Date().toISOString();
    const key = `contact_${Date.now()}_${email}`;

    // Store the contact submission in KV store
    await kv.set(key, {
      name,
      email,
      message,
      timestamp,
    });

    console.log(`Contact form submitted: ${name} (${email}) at ${timestamp}`);

    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return c.json({ error: 'Failed to submit form' }, 500);
  }
}
