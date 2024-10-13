import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
// Work in one WiFi network!
const AppContext = createContext();

export function AppProvider({children}) {
    // [id, source, title, decription, url, imageUrl, publishedAt, content]
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    try {
      const url = "http://192.168.1.18:5000/api/news/getByQ ";
      const data = {
        query: 'Дуров',
        language: 'ru'
      }
      const response = await axios.post(url, data)
      setNews(response.data)
    } catch (e) {
      console.log("Error fetching news: ", e)
    }
  }

  // const addItem = (data) => {
  //   setNews((list) => [
  //       { source: data.source, title: data.title, description : data.description, url : data.url, imageUrl : data.imageUrl, publishedAt : data.publishedAt, content : data.content},
  //       ...list,
  //   ]);
  // };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <AppContext.Provider value={{ news }}>
        {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
    return useContext(AppContext);
}