import { Link } from "@inertiajs/react";
import UrlForm from "../Dashboard/Partials/UrlForm";
import PublicUrl from "./Partials/PublicUrl";

export default function Home({ auth, url }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="shrink-0 flex items-center text-2xl text-slate-900 font-extrabold">
                            <Link
                                href={route('/')}>
                                UrlBreve
                            </Link>
                        </div>

                        <div className="shrink-0 flex items-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-600 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div>
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-gray-600 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Entrar
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ms-4 font-semibold text-gray-600 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Registro
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-28">
                        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
                            Mejora la accesibilidad de tus sitios con <span className="text-secondary-color">UrlBreve</span>
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 text-center max-w-3xl mx-auto">
                            Crea enlaces cortos y compártelo con todo el mundo.
                        </p>
                    </div>

                    <div className="bg-white py-6 px-10 overflow-hidden shadow-sm rounded-lg lg:mt-24 sm:mt-6">
                        <UrlForm />
                    </div>

                    {url && (
                        <div className="max-w-5xl mx-auto pt-8 pb-28">
                            <PublicUrl url={url} />
                        </div>
                    )}

                </div>
            </main>
        </div>
    )
}
