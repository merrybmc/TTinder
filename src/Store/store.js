import { atom } from 'recoil';

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
