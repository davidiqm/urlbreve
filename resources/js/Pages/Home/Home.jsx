import { Link } from "@inertiajs/react";
import UrlForm from "../Dashboard/Partials/UrlForm";
import PublicUrl from "./Partials/PublicUrl";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Home({ auth, url }) {
    return (
        <div className="bg-slate-100 min-h-screen">
            <nav className="bg-tema-3 bg-opacity-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        <div className="shrink-0 flex items-center">
                            <Link href={route('/')}>
                                <ApplicationLogo className="text-2xl text-slate-100" />
                            </Link>
                        </div>

                        <div className="shrink-0 flex items-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-slate-100 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div>
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-slate-100 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Entrar
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="ms-4 font-semibold text-slate-100 hover:text-slate-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="relative max-w-4xl mx-auto pt-14 sm:pt-24 lg:pt-14">
                        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-4xl lg:text-6xl tracking-tight text-center">
                            Mejora la accesibilidad de tus sitios con <span className="text-tema-2">UrlBreve</span>
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 text-center max-w-3xl mx-auto">
                            Crea enlaces cortos y compártelo con todo el mundo.
                        </p>
                    </div>

                    <div className="bg-tema-1 text-white mt-24 sm:mt-10 lg:mt-14 overflow-hidden shadow-lg rounded-lg ">
                        <UrlForm />
                    </div>

                    {url && (
                        <div className="max-w-5xl mx-auto pt-14 pb-20">
                            <PublicUrl url={url} />
                        </div>
                    )}

                </div>
            </main>
        </div>
    )
}
