import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h5 className="d-flex align-items-center p-2">Wave</h5>
    </div>
    <ul className="d-flex">
      <li className="d-flex align-items-center p-2">
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li className="d-flex align-items-center p-2">
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li className="d-flex align-items-center p-2">
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
