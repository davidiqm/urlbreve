import moment from "moment"
import { useEffect, useState } from "react"
import UrlInfo from "./UrlInfo"


const UrlElement = ({url, setUrlId}) => {

    return (
        <tr className="border">
            <td className="p-4 cursor-pointer hover:bg-gray-100 active:bg-gray-200" onClick={() => setUrlId(url.id)}>
                <small>{moment(url.created_at).format('MMMM DDD')}</small><br />
                <a href={url.urlShorten} target="_blank">{url.urlShorten}</a>br
                <p>Visitas: 0</p>
            </td>
        </tr>
    )
}

export default function UrlsPanel ({urls}) {
    const [urlSelected, setUrlSelected] = useState();
    const [urlId, setUrlId] = useState()

    const listUrls = urls.map(url =>
        <UrlElement key={url.id} url={url} setUrlId={setUrlId} />
    )

    useEffect(() => {
        if (urlId) {
            const selected = urls.find(el => el.id == urlId)
            console.log(selected)
            setUrlSelected(selected)
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

            <div className="w-full">
                {urlSelected && <UrlInfo url={urlSelected} />}
                {!urlSelected && <h1>Selecciona una URL</h1>}
            </div>
        </div>
    )
}
