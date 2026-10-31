import './Footer.css'

function Footer(props) {
    return (
        <footer className="site-footer">
            <p>Made by {props.author} - {props.year}</p>
        </footer>
    )
}

export default Footer