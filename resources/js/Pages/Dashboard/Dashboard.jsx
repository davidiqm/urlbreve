import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UrlForm from './Partials/UrlForm';
import UrlsPanel from './Partials/UrlsPanel';

export default function Dashboard({ auth, urlList }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UrlForm withUser={true} />
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <UrlsPanel urlList={urlList} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
