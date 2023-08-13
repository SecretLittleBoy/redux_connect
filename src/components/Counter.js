// src/components/Counter.js
import React from 'react';
import { connect } from 'react-redux';

// 定义 React 组件
const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// 连接 Redux 状态到组件的 props
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

// 连接 Redux 操作到组件的 props
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
};

// 使用 connect 函数连接组件和 Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
