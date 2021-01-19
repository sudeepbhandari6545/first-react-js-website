import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';


ReactDOM.render(
  <>
  <div className="heading">
    <h2>Download YTS YIFY movies: HD smallest size</h2>
  </div>
  <div className="mycard">
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/outside_the_wire_2021/medium-cover.jpg" title="Movies" sname="Out of the Wire" link="https://www.netflix.com/np/title/81074110" />
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/news_of_the_world_2020/medium-cover.jpg" title="Movies" sname="News of the world" link="https://yts.mx/movies/news-of-the-world-2020" />
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/locked_down_2021/medium-cover.jpg" title="Movies" sname="Locked Down" link="https://yts.mx/movies/locked-down-2021" />
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/wonder_woman_1984_2020/medium-cover.jpg" title="Movies" sname="Wonder Women" link="https://yts.mx/movies/wonder-woman-1984-2020" />
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/safe_inside_2019/medium-cover.jpg" title="Movies" sname="Safe Inside" link="https://yts.mx/movies/safe-inside-2019" />
  <Cards imgsrc="https://img.yts.mx/assets/images/movies/twiceborn_2020/medium-cover.jpg" title="Movies" sname="Twiceborn" link="https://yts.mx/movies/twiceborn-2020" />
  </div>
  </>

,document.getElementById('root')
);


