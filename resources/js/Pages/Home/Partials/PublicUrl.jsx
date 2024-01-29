import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import moment from "moment";
import QRCode from "react-qr-code";

export default function PublicUrl({ url }) {
    const handleCopyToClipboard = () => {
        navigator.permissions.query({name: "clipboard-write"}).then((permission) => {
            console.log(permission)
            if (permission.state === "granted" || permission.state === "prompt") {
                navigator.clipboard.write(url.urlShorten).then(resolve, reject).catch(reject);
            }
            else {
                console.log(new Error("Permission not granted!"));
            }
        });
    }

    const handleDownloadQR = () => {
        const qr = document.getElementById('url_qr').outerHTML
        console.log(qr)
        const blob = new Blob([qr], {type: "image/svg+xml"})

        const urlObject = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.setAttribute("download", `qr-${url.code}.svg`)
        a.setAttribute("href", urlObject)
        a.style.display = "none"
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(urlObject)
    }

    return (
        <div className="bg-white px-10 py-12 shadow-lg rounded-lg">
            <h2 className="mb-6 text-3xl font-semibold">¡Url Acortada! Mira cómo quedó:</h2>
            <h3>Url original: <a href={url.url} target="_blank" rel="noopener noreferrer" className="break-words">{url.url}</a></h3>
            <small>{moment(url.created_at).format('MMMM DDD, YYYY hh:mm A')}</small>
            <div className="flex sm:flex-col lg:flex-row items-center">
                <p className="w-full">Url breve: <a href={url.urlShorten} target="_blank" rel="noopener noreferrer" className="break-words">{url.urlShorten}</a></p>
                <PrimaryButton onClick={handleCopyToClipboard} className="items-end">Copiar</PrimaryButton>
            </div>
            <p>Caduca: {moment(url.expiration).format('MMMM DDD, YYYY hh:mm A')}</p>
            <div className="flex items-end gap-5 mt-8">
                <div className="h-auto max-w-32 w-full">
                    {url.urlShorten &&
                    <QRCode
                        id="url_qr"
                        title={url.urlShorten}
                        size={256}
                        className="h-auto w-full"
                        value={url.urlShorten}
                        viewBox={`0 0 256 256`}
                        />}
                </div>
                <div >
                    <SecondaryButton onClick={handleDownloadQR}>Descargar QR</SecondaryButton>
                </div>
            </div>
        </div>
    )
}
