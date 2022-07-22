import { NativeModules } from 'react-native';

NativeModules.CryptographicModule = {
  loadKeys: jest.fn(),
  sign: jest.fn(),
  verify: jest.fn(),
};
