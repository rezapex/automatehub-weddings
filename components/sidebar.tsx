import Link from 'next/link';

export function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <nav>
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/dashboard/new-project">New Project</Link></li>
                    <li><Link href="/dashboard/billing">Billing</Link></li>
                    {/* Add more navigation items as needed */}
                </ul>
            </nav>
        </aside>
    );
}