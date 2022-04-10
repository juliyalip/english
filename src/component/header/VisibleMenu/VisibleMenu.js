import React from 'react';
import { Link } from 'react-router-dom';
import s from './visibleMenu.module.css';

export default function VisibleMenu() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="/task">Мои задачи</Link>
      </li>
      <li className={s.item}>Новые слова</li>
      <li className={s.item}>Словарь</li>
    </ul>
  );
}
