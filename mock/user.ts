import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

export default {
  'POST /api/login': (req: Request, res: Response) => {
    const { password, name } = req.body;
    if (password === '123' && name === '123') {
      res.send({
        status: 1,
        name: 'linjunfu',
        icon:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userid: '001',
      });
    } else {
      res.send({
        status: 0,
        msg: '账号或者密码错误',
      });
    }
  },
};
