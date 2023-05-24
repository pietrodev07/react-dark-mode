import {useEffect, useState} from "react";
import Article from "../Article/Article";
import data from "../../data/data";
import './Main.css'

const getTheme = () => {

  if(localStorage.getItem('theme')) {

    return localStorage.getItem('theme');

  } else {

    return "light-mode";

  }

}

const Main = () => {

  const articles = data;

  const themeOptions = ['light-mode', 'dark-mode'];

  const [theme, setTheme] = useState(getTheme());

  const changeTheme = () => {

    if(theme === themeOptions[0]) {

      setTheme(themeOptions[1]);

    } else {

      setTheme(themeOptions[0]);

    }

  }

  useEffect(() => {

    document.documentElement.className = theme;

    localStorage.setItem('theme', theme);

  }, [theme]);

  return (

    <main className="main">

      <button className="theme-btn" onClick={changeTheme}>Change Theme</button>

      <div className="container">

        {articles && articles.map(article => {
          const { id, title, description } = article;
          return <Article key={id} title={title} description={description} />
        })}

      </div>

    </main>

  )

}

export default Main