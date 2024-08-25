import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const cartAtom = atom({
    key: 'cartAtom',
    default: [],
    effects_UNSTABLE: [persistAtom],
});