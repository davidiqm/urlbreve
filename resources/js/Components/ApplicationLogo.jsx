export default function ApplicationLogo({ className = '', ...props }) {
    return (
        <h1
            {...props}
            className={'font-extrabold ' + className}>
            UrlBreve
        </h1>
    );
}
