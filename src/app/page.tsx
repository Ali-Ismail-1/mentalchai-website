export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* About Me Section */}
      <section className="text-left mb-12">
        <h1 className="text-center text-4xl font-bold mb-4 text-blue-600">MentalChai</h1>
        <p className="text-left text-lg text-gray-700 max-w-xl">
          Welcome to Mentalchai, where I share my journey in
          <ol className="list-disc list-inside text-left text-lg text-gray-700 max-w-xl mb-4">
            <li>Tech</li>
            <li>Personal Growth</li>
            <li>Islam</li>
          </ol>
        </p>
        <p className="text-center text-lg text-gray-700 max-w-xl">
          I&apos;m passionate about building cool projects, exploring meaningful ideas, and helping others
          along the way. Let&apos;s grow together!
        </p>


      </section>

      {/* Quick Links Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6 text-blue-500">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/islam"
            className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
          >
            Islam
          </a>
          <a
            href="https://mentalchai.newzenler.com/"
            className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
          >
            Learn
          </a>
          <a
            href="https://aliismail.beehiiv.com/"
            className="px-6 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition"
          >
            Blog
          </a>
          <a
            href="https://github.com/ali-ismail-1"
            className="px-6 py-3 bg-purple-500 text-white rounded shadow hover:bg-purple-600 transition"
          >
            Portfolio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Mentalchai. Built with ❤️ and Next.js.</p>
      </footer>
    </div >
  );
}
