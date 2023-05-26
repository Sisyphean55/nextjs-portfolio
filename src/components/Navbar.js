import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" href="/">Nextjs 0.0.1</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link href="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/github">Github</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" href="#">Blog</Link></li>
                            <li><Link className="dropdown-item" href="#">Github</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item">Test</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;