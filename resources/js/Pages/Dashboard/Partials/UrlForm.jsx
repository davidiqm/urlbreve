import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const URL_PATTERN = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/

export default function UrlForm({ withUser = false }) {
    const [urlError, setUrlError] = useState(false)
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        url: '',
    });

    const handleUrlInput = (e) => {
        setData('url', e.target.value)
        const match = URL_PATTERN.test(e.target.value)

        if (match) {
            setUrlError(false)
        } else {
            setUrlError(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (withUser) {
            post(route('url.store'))
            return
        }

        post(route('url.store.public'))
    }

    useEffect(() => {
        setData('url', '')
    }, [recentlySuccessful])

    return (
        <div className="py-7 px-10 sm:py-5 sm:px-3 md:py-5 md:px-10 lg:py-7 lg:px-10">
            <div>
                <h1 className="text-lg font-semibold">¡Acorta tu URL!</h1>
            </div>

            <div className="mt-2 mb-3">
                <form onSubmit={onSubmit} className="flex flex-row sm:flex-col lg:flex-row items-center gap-5">
                    <div className="w-full">
                        <TextInput
                            id="url"
                            onChange={handleUrlInput}
                            className="w-full text-black"
                            type="url"
                            required
                            isFocused
                            autoComplete="url"
                            value={data.url}
                            placeholder="Introduce tu URL"
                        />

                    </div>

                    <div className="flex-none">
                        <PrimaryButton disabled={processing}>
                            Acortar Url
                        </PrimaryButton>
                    </div>
                </form>
            </div>

            <div className="">
                {errors.url && <InputError className="mt-2" message={errors.url} />}
                {urlError && <small className="text-sm text-red-500 font-semibold">Ingresa un Url válido.</small>}
            </div>

        </div>
    )
}
