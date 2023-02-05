import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Index() {
  const route = useRouter();
  useEffect(() => {
    route.pathname === '/' && route.push('/home');
  }, [route]);
  return (
    <>
      <div className="loader"></div>
    </>
  );
}
