export const metadata = { title: 'Newsletter – Mentalchai', description: 'Calm, clear, actionable clarity in your inbox.' };

export default function NewsletterPage() {
  return (
    <div className="px-4 py-10 md:px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Join the Newsletter</h1>
      <p className="text-gray-600 mb-6">
        Weekly notes on clarity, resilience, and holistic growth — calm, grounded, and practical.
      </p>
      <div className="rounded-lg border bg-white p-4">
        <iframe
          src="https://embeds.beehiiv.com/4165d527-b030-4e9d-821e-3b76f6ba9374?slim=true"
          style={{ width: '100%', height: 200, background: 'transparent' }}
        />
      </div>
    </div>
  );
}