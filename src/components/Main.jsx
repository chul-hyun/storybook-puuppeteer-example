import React from 'react';

const Main = () => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all" />
    <ul className="todo-list">
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>123123</label>
          <button className="destroy" />
        </div>
        <input className="edit" value="123123" />
      </li>
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>123123456</label>
          <button className="destroy" />
        </div>
        <input className="edit" value="123123" />
      </li>
    </ul>
  </section>
);

export default Main;
