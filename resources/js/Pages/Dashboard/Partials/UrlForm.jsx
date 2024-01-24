import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

const URL_PATTERN = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/

export default function UrlForm() {
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

        post(route('url.store'))
    }

    useEffect(() => {
        setData('url', '')
    }, [recentlySuccessful])

    return (
        <form onSubmit={onSubmit}>
            <div>
                <InputLabel htmlFor="url" value="Url" />

                <TextInput
                    id="url"
                    className="mt-1 block w-full"
                    onChange={handleUrlInput}
                    type="url"
                    required
                    isFocused
                    autoComplete="url"
                    value={data.url}
                />

                {errors.url && <InputError className="mt-2" message={errors.url} />}
                {urlError && <p>Url Error</p>}
            </div>

            <div>
                <PrimaryButton className="" disabled={processing}>
                    Acortar Url
                </PrimaryButton>
            </div>
        </form>
    )
}
