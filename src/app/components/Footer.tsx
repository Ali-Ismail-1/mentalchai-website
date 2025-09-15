import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <h2 className="text-xl font-bold text-center mb-4">Connect with Me</h2>
      <div className="flex justify-center space-x-6">
        <Link href={site.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 text-2xl">
          <FaGithub />
        </Link>
        <Link href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 text-2xl">
          <FaLinkedin />
        </Link>
        <Link href={site.links.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 text-2xl">
          <FaTwitter />
        </Link>
      </div>
      <p className="text-center text-sm mt-4">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
