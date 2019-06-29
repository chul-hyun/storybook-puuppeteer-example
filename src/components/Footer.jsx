import React from 'react';

const Footer = () => (
  <footer className="footer">
    <span className="todo-count">
      <strong>1</strong>
      <span> </span>
      <span>item</span>
      <span> left</span>
    </span>
    <ul className="filters">
      <li>
        <a href="#/" className="selected">
          All
        </a>
      </li>
      <span> </span>
      <li>
        <a href="#/active" className="">
          Active
        </a>
      </li>
      <span> </span>
      <li>
        <a href="#/completed" className="">
          Completed
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
