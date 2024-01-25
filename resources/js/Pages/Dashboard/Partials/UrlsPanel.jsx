import { useEffect, useState } from "react"
import moment from "moment"
import UrlInfo from "./UrlInfo"


const UrlElement = ({url, setUrlId}) => {

    return (
        <tr className="border">
            <td className="p-4 cursor-pointer hover:bg-gray-100 active:bg-gray-200" onClick={() => setUrlId(url.id)}>
                <small>{moment(url.created_at).format('MMMM DDD')}</small><br />
                <p>{url.urlShorten}</p>
                <p>Visitas: 0</p>
            </td>
        </tr>
    )
}

export default function UrlsPanel () {
    const [urls, setUrls] = useState()
    const [urlSelected, setUrlSelected] = useState();
    const [urlId, setUrlId] = useState()
    const [listUrls, setListUrls] = useState()

    useEffect(() => {
        fetch(route('url.get'))
            .then(res => res.json())
            .then(data => {
                setUrls(data)
                setListUrls(data.map(url => {
                     return <UrlElement key={url.id} url={url} setUrlId={setUrlId} />
                }))
            })
    }, [])

    useEffect(() => {
        if (urlId) {
            const selected = urls.find(el => el.id == urlId)
            setUrlSelected(selected)
        }
    }, [urlId])

    if (!urls) return <p>Cargando...</p>

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
