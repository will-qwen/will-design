import { useNavigate } from 'dumi';
import { useLayoutEffect,useTransition } from 'react';

import nprogress from 'nprogress';

import './Navigation.css';

export default () => {
  const [isPending, startTransition] = useTransition();

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/components/overview');
  };
  useLayoutEffect(() => {
    if (isPending) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }, [isPending]);
  return (
    <div className={'nav'}>
      <a key={1}>设计</a>
      <a key={2}>研发</a>
      <a key={3} onClick={handleClick}>
        组件
      </a>
      <a key={4}>博客</a>
    </div>
  );
};
