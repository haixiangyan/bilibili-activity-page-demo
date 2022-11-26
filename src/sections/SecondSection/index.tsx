import {FC, useState} from "react";
import CartoonImage from '../../assets/cartoon.jpg';
import MovieImage from '../../assets/movie.png';
import LifeImage from '../../assets/life.jpg';
import FoodImage from '../../assets/food.jpg';

import styles from './styles.module.scss';
import classNames from "classnames";

const tabs = [
  {
    key: 'cartoon',
    title: '动画',
  },
  {
    key: 'food',
    title: '美食'
  },
  {
    key: 'movie',
    title: '电影',
  },
  {
    key: 'life',
    title: '生活'
  }
]

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon');

  return (
    <div className={styles.secondSection}>
      {/* Tabs */}
      <ul>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <span>{tab.title}</span>
            <span className={classNames(styles.line, { [styles.visible]: activeTab === tab.key })} />
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div>
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt="Cartoon"/>
        </section>
        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt="Food"/>
        </section>
        <section>
          <h2>电影</h2>
          <img src={MovieImage} alt="Movie"/>
        </section>
        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt="Life"/>
        </section>
      </div>
    </div>
  )
}

export default SecondSection;
