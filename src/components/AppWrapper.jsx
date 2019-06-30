import React from 'react';

const AppWrapper = ({ children }) => (
  <section className="todoapp">
    <div>{children}</div>
  </section>
);

export default AppWrapper;
