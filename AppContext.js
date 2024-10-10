import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({children}) {
    // [id, source, title, decription, url, imageUrl, publishedAt, content]
  const [news, setNews] = useState([
    {id:0, source : "", title : "TEST_1", description : "", url : "", imageUrl : "", publishedAt : "", content : ""},
    {id:1, source : "", title : "TEST_2", description : "", url : "", imageUrl : "", publishedAt : "", content : ""},
    {id:2, source : "", title : "TEST_3", description : "", url : "", imageUrl : "", publishedAt : "", content : ""},
    {id:3, source : "Izhlife.ru",title : "Борьба продолжается: Дуров разоблачил Болгар", description:"Как сообщает StarHit, представитель Дурова дал комментарий зарубежным СМИ о его отношениях с Болгар. Мы уже писали, кто такая Ирина и как раскрылись измены Дурова.",
    url:"https://izhlife.ru/dosug/borba-prodolzhaetsya-durov-razoblachil-bolgar.html",
    imageUrl:"https://izhlife.ru/upload/resize_cache/webp/iblock/173/kgnh52kurnriuij3sre6yl1fvb8hu1pz/bolagr-_1_.webp",
    publishedAt:"2024-10-04T12:21:00Z", content:", 150 . : woman.ru\r\nStarHit, . , . \r\nIT-, . , . \r\n« New York Times. - . . , 10 . , , , , , », ."},
    {id:4, source:"Vz.ru", title:"Telegram в третьем квартале 2024 года раскрыл данные 632 пользователей во Франции", description:"Бот Telegram Transparency показал, что в третьем квартале 2024 года сервис выдал данные 632 пользователей во Франции в рамках 210 расследований. Согласно информации, предоставленной новым ботом Telegram Transparency, в третьем квартале 2024 года мессенджер Te…",
    url:"https://vz.ru/news/2024/10/3/1290585.html",imageUrl:"https://img.vz.ru/upimg/soc/soc_1290585.png",
    publishedAt:"2024-10-03T18:29:33Z", content :", Forbes,    Forbes. 2023 583,1 "}
  ])

  const addItem = (data) => {
    setNews((list) => [
        { source: data.source, title: data.title, description : data.description, url : data.url, imageUrl : data.imageUrl, publishedAt : data.publishedAt, content : data.content},
        ...list,
    ]);
  };

  return (
    <AppContext.Provider value={{ news, addItem }}>
        {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
    return useContext(AppContext);
}