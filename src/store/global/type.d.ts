import { GlobalStore as globalStore } from './index';

export as namespace GlobalStore;

export interface IGlobalStore extends globalStore {}

export interface IWebConfig {
  primaryColor: string;
  drawerColor: string;
  title: string;
  drawerWidth: number;
}

export interface IChangeEdit {
  (value: string): void;
}

export interface IChangeLanguages {
  (value: string): void;
}

export interface IUploadDisplay {
  (value?: boolean): void;
}

type Indexes<T> = { [P in keyof T]?: T[P] };
export interface IChangeWebConfig {
  (value: Indexes<IWebConfig>): void;
}
