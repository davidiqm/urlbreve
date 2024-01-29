import { useEffect, useState } from "react"
import moment from "moment"
import UrlInfo from "./UrlInfo"


const UrlElement = ({ url, setUrlId }) => {
    return (
        <tr className="border">
            <td className="max-w-72 p-4 cursor-pointer hover:bg-gray-100 active:bg-gray-200" onClick={() => setUrlId(url.id)}>
                <small>{moment(url.created_at).format('MMMM DDD')}</small><br />
                <p className="break-words">{url.urlShorten}</p>
                <p>Visitas: {url.visits}</p>
            </td>
        </tr>
    )
}

export default function UrlsPanel ({ urlList }) {
    const [urlId, setUrlId] = useState()

    const urlListElements = urlList.map(url => <UrlElement key={url.id} url={url} setUrlId={setUrlId} />)

    return (
        <div className="flex flex-row sm:flex-col-reverse lg:flex-row gap-4">
            <aside className="lg:w-72">
                <table className="w-full border rounded-md">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="py-2">
                                <strong className="text-white">{urlList.length} Url's acortadas</strong>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {urlListElements}
                    </tbody>
                </table>
            </aside>

            <div className="w-full">
                {urlId && <UrlInfo urlId={urlId} />}
                {!urlId && <h1>Selecciona una URL</h1>}
            </div>
        </div>
    )
}
