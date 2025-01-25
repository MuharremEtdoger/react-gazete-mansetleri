import './gazete.css';
export default function Gazete({gObj}) {
    return (
        <a href={ gObj.image } className="gazete-item" data-lity>
            <img src={ gObj.image }></img>
        </a>
    )
  }