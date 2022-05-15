import 'pinia'

// 基础类型定义
interface BindOptionBase {
  setKey?: string;
  setFromStorage?: boolean;
  validTime?: number | string | Date;
  invalidCallBack?: Function;
}

// Object方式参数的类型定义
interface BindOptionsObject {
  [key: string]: BindOptionBase | boolean;
}

// Array方式参数中item的类型定义
interface BindOptionArray extends BindOptionBase {
  stateKey?: string;
}

// 完整的参数定义
interface StorageDetailOptions {
  defaultUse?: boolean;
  omit?: string[];
  storageOptions?: BindOptionsObject | Array<BindOptionArray | string>;
}

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    storage?: boolean | BindOptionsObject | Array<BindOptionArray | string> | StorageDetailOptions;
  }
}