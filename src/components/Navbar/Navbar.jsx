import './Navbar.css';
import WordmarkImg from "../../assets/Wordmark.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div
            className="nav-bar d-flex justify-content-between align-items-top mt-5 mx-auto w-100 px-4"
            style={{ maxWidth: "1200px" }}
        >
            <div>
                <Link to="/">
                    <img src={WordmarkImg} alt="" height={70} />
                </Link>
            </div>
            <div className="nav-rule"></div>
            <div className="label">
                <span className="fst-italic text-nowrap">Graphic Design</span>
                <br />
                <span className='fst-bold fs-5 text-success'>Portfolio</span>
            </div>

        </div>
    )
}

