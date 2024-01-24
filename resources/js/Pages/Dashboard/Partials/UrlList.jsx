import moment from "moment"
import { useEffect, useState } from "react"
import UrlInfo from "./UrlInfo"


const UrlElement = ({url, setUrlId}) => {
    const urlShorten = `${route("/")}/${url.code}`

    return (
        <tr className="border">
            <td className="p-4 cursor-pointer" onClick={() => setUrlId(url.id)}>
                <small>{moment(url.created_at).format('MMMM DDD')}</small><br />
                <a href={urlShorten} target="_blank">{urlShorten}</a>br
                <p>Visitas: 0</p>
            </td>
        </tr>
    )
}

export default function UrlList ({urls}) {
    const [urlSelected, setUrlSelected] = useState();
    const [urlId, setUrlId] = useState()

    const listUrls = urls.map(url =>
        <UrlElement key={url.id} url={url} setUrlId={setUrlId} />
    )

    useEffect(() => {
        if (urlId) {
            fetch(route('url.get', urlId))
                .then(res => res.json())
                .then(data => setUrlSelected(data))
        }
    }, [urlId])

    return (
        <div className="flex flex-row auto-cols-max gap-4">
            <aside className="lg:w-72">
                <table className="w-full border rounded-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th>
                                <strong>{urls.length} Url's acortadas</strong>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {listUrls}
                    </tbody>
                </table>
            </aside>

            <div className="border w-full">
                {urlSelected && <UrlInfo url={urlSelected} />}
                {!urlSelected && <h1>Selecciona una URL</h1>}
            </div>
        </div>
    )
}
