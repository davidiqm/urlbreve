import { Link } from "@inertiajs/react"

const UrlElement = ({url}) => {
    const urlShorten = `${route("home.index")}/${url.code}`

    return (
        <li>
            <a href={urlShorten} target="_blank">{urlShorten}</a> | {url.url}
        </li>
    )
}

export default function UrlList ({urls}) {
    const listUrls = urls.map(url =>
        <UrlElement key={url.id} url={url} />
    )

    return (
        <ul>
            {listUrls}
        </ul>
    )
}
