// src/app/islam/page.tsx
export default function IslamPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Islamic Resources</h1>
            <ul>
                <li><a href="/islam/umrah">Umrah Resources</a></li>
                <li><a href="/islam/bayt-ul-mal">Bayt ul Mal</a></li>
            </ul>
        </div>
    );
}
