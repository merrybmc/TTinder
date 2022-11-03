import { atom } from 'recoil';

export const MbtiAnswer = atom({ key: 'mbtiAnswer', default: 'MBTI' });
export const LocaAnswer = atom({ key: 'locationAnswer', default: 'Location' });

export const HeaderNav = atom({
  key: 'HeaderNav',
  default: 0,
});

export const LogoutCheck = atom({
  key: 'LogoutCheck',
  default: 0,
});

export const sortInfo = atom({
  key: 'sortInfo',
  default: { sorting: 0 },
});
