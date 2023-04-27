import { Router } from 'express';

// 型定義
type Data = {
  user_id: string;
  user_name: string;
};

// URLレスポンスデータ定義
const userData: Data[] = [
  {
    user_id: '001',
    user_name: 'Yamada Taro',
  },
  {
    user_id: '002',
    user_name: 'Tanaka Jiro',
  },
];

export const createRouter = () => {
  const router = Router();

  router.get('/users', (_req, res) => {
    res.status(200).send(userData);
  });

  return router;
};
