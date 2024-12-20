import RootLayout from "@/app/layout";

// src/app/islam/umrah/page.tsx
export default function UmrahPage() {
    return (
        <div>
            <div className="min-h-screen bg-gray-50 p-6">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Umrah Resources</h1>
                <p className="text-lg text-gray-700">
                    Here you will find guides, tips, and resources for performing Umrah.
                </p>
                <a href="/islam" className="text-blue-500 hover:underline">
                    ← Back to Islamic Resources
                </a>
            </div>
        </div>
    );
}
