import { FaGithub } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

  const date = new Date().getFullYear();

  return (

    <footer className="footer">
      <p>Copyright &copy; {date} pietrodev07</p>
      <a href="https://github.com/pietrodev07/react-dark-mode" target="_blank" className="fa-github"><FaGithub /></a>
    </footer>

  )

}

export default Footer