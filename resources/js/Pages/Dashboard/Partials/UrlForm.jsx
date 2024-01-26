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
        <div>
            <div className="mb-3">
                <h1>¡Acorta tu URL!</h1>
            </div>

            <div>
                <form onSubmit={onSubmit} className="flex flex-row items-center gap-5">
                    <div className="flex-auto">
                        <TextInput
                            id="url"
                            onChange={handleUrlInput}
                            className="w-full"
                            type="url"
                            required
                            isFocused
                            autoComplete="url"
                            value={data.url}
                            placeholder="Introduce tu URL"
                        />

                    </div>

                    <div>
                        <PrimaryButton disabled={processing}>
                            Acortar Url
                        </PrimaryButton>
                    </div>
                </form>
            </div>

            <div className="">
                {errors.url && <InputError className="mt-2" message={errors.url} />}
                {urlError && <p>Url Error</p>}
            </div>

        </div>
    )
}
