interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: { RESEND_API_KEY?: string };
}) {
  const apiKey = context.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Email service not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const data = (await context.request.json()) as ContactFormData;
    const { name, email, company, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'MrShrf <sales@mrshrf.com>',
        to: ['sales@mrshrf.com'],
        reply_to: email,
        subject: `Contact from ${name}${company ? ` (${company})` : ''}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend API error:', err);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (c) => map[c] || c);
}
