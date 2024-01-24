
export default function UrlInfo ({url}) {

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

    return (
        <div>
            <h1>{url.url}</h1>
            <p>{url.urlShorten}</p>
            <button onClick={handleCopyToClipboard}>Copiar</button>
        </div>
    )
}
