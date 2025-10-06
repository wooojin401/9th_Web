import { useEffect, useState } from 'react';

export function useCurrentPath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    // 뒤로/앞으로 가기시 동작
    window.addEventListener('popstate', update);
    // (pushState/replaceState) 직후 동작할 수 있도록 커스텀 이벤트 사용.
    window.addEventListener('app:pushstate', update);

    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('app:pushstate', update);
    };
  }, []);

  return path;
}
