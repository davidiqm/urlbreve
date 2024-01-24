import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UrlForm from './Partials/UrlForm';
import UrlList from './Partials/UrlList';

export default function Dashboard({ auth, urls }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UrlForm />

                    </div>
                    {urls && <UrlList urls={urls} />}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
