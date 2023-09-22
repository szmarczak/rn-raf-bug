import { useEffect, useState } from 'react';

let gid = 0;

export const Bug = ({ text = '' }: { text?: string }) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    let id: number;

    const animate = (timestamp: number) => {
      setData(Math.random()); // This is the line

      let old = id;
      id = requestAnimationFrame(animate);

      console.log('tick', old, id, timestamp, ++gid);
    };

    if (text) {
      id = requestAnimationFrame(animate);
      console.log('animate', id, performance.now(), ++gid);
    }

    return () => {
      console.log('canceling', id, performance.now(), ++gid);
      cancelAnimationFrame(id);
    };
  }, [text]);

  return (
    <></>
  );
};

export default function App() {
	return <Bug text="" />;
  }
