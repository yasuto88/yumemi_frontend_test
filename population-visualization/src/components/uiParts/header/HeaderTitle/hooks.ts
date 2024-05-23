import { useState, useEffect } from 'react';

/**
 * タイトルを取得するカスタムフック
 * @param getTitleFunction - タイトルを取得する関数
 */
export function useTitle(getTitleFunction: () => Promise<string>) {
  const [title, setTitle] = useState<string>('初期タイトル');

  useEffect(() => {
    const getTitle = async () => {
      // TODO: 状態から取得するように変更
      const fetchedTitle = await getTitleFunction();
      setTitle(fetchedTitle);
    };

    getTitle();
  }, [getTitleFunction]);

  return title;
}
