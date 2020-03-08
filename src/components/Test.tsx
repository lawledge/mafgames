import * as React from "react";

interface INewsItem {
  id: number; // id новости - это число
  title: string; // title (заголовок) - строка
  text: string; // text (текст новости) - строка
  link: string; // link (ссылка) - строка
  timestamp: Date; // timestamp (дата) - тип Дата в js
}

// middleware ?
interface INewsItemProps {
  data: INewsItem; // указали здесь, наш объект (подробный код в блоке выше)
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { id, text } // вытащили переменные из свойств, id и text - ок, abracadabra - ошибка
}) => {
  return (
    <article>
      <div>{id}</div>
      <div>{text}</div>
    </article>
  );
};

export { NewsItem };
