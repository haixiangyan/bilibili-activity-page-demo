import {FC, useEffect, useRef, useState} from "react";
import CartoonImage from '../../assets/cartoon.jpg';
import MovieImage from '../../assets/movie.png';
import LifeImage from '../../assets/life.jpg';
import FoodImage from '../../assets/food.jpg';
import LogoImage from '../../assets/logo.png';

import styles from './styles.module.scss';
import classNames from "classnames";

const tabs = [
  {
    key: 'cartoon',
    title: '动画',
    image: CartoonImage,
  },
  {
    key: 'food',
    title: '美食',
    image: FoodImage,
  },
  {
    key: 'movie',
    title: '电影',
    image: MovieImage,
  },
  {
    key: 'life',
    title: '生活',
    image: LifeImage,
  }
]

const TAB_HEIGHT = 56;

// 1. 点击 Tab 滚动跳转 x
// 3. Tabs 吸顶 x
// 2. 滚动时，高亮 Tab x
// 4. 按钮吸底
const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon');
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const secondSectionRef = useRef<HTMLDivElement>(null);

  const activate = (key: string) => {
    setActiveTab(key);

    const tabContentEl = document.querySelector(`[data-id=${key}]`);

    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);

      const sectionNodes = secondSectionRef.current.querySelectorAll('section');

      Array.from(sectionNodes).forEach(sectionEl => {
        const {top} = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute('data-id') || '';

        if (top <= TAB_HEIGHT) {
          setActiveTab(key);
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/* Tabs */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span className={classNames(styles.line, { [styles.visible]: activeTab === tab.key })} />
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div>
        {tabs.map(tab => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.image} alt={tab.key}/>
          </section>
        ))}
      </div>

      {/* 吸底按钮 */}
      <div className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}>
        <img src={LogoImage} alt="LOGO"/>

        <a href="https://www.bilibili.com/" target="_blank">
          <button>App 内打开</button>
        </a>
      </div>
    </div>
  )
}

export default SecondSection;
