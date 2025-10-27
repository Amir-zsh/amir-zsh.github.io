import { dracula } from './dracula';
import { blulocoLight } from './atomOneLight';

export type ThemeName = 'dracula' | 'blulocoLight';

export const themes = {
  dracula: {
    name: 'Dracula',
    colors: dracula,
  },
  blulocoLight: {
    name: 'Bluloco Light',
    colors: blulocoLight,
  },
};

export { dracula, blulocoLight };

