# pinia-storage

---

A pinia plugin to automatically bind your data with storage.

**still in development.**

## Usage

```javascript
// 在store内全局进行storage绑定，并将state下第一层的数据与storage一一对应
const optionsBase =
  { storage: true }

// 一一对应绑定
const optionsArrayBase =
  { storage: ['key1', 'key2'] }
const optionsObjectBase =
  { storage: { 'key1': true, 'key2': true } }

// 使用storage内配置进行绑定
const optionsArrayDetail =
{
  storage: [
    'key1',
    {
      stateKey: 'key2', // state值的key
      setKey: 'ls_key2', // localStorage对应的key，如果未设置则使用stateKey
      validTime: 100000, // 生效时间，支持格式'1d2h3s4ms' '1day2hour3second4millisecond'
      invalidCallBack: (oldVal, setTime) => { }
    }
  ]
}

const optionsObjectDetail =
{
  storage: {
    'key1': true,
    'key2': {
      validTime: 100000,
      setKey: 'ls_key2',
      invalidCallBack: (oldVal, setTime) => { }
    }
  }
}

// 在store内全局进行storage绑定，并将state下第一层的数据与storage一一对应，优先使用storageOptions内配置
const optionsArrayDetailWithDefault =
{
  storage: {
    defaultUse: true,
    omit: ['key3', 'key4'],
    storageOptions: [
      'key1',
      {
        stateKey: 'key2',
        setKey: 'ls_key2',
        validTime: 100000,
        invalidCallBack: (oldVal, setTime) => { }
      }
    ]
  }
}

const optionsObjectDetailWithDefault =
{
  storage: {
    defaultUse: true,
    omit: ['key3', 'key4'],
    storageOptions: {
      'key1': true,
      'key2': {
        validTime: 100000,
        setKey: 'ls_key2',
        invalidCallBack: (oldVal, setTime) => { }
      }
    }
  }
}

```