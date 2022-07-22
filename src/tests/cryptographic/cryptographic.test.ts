import { NativeModules } from 'react-native';
describe('Cryptographic Native Module Testing', () => {
  const signedString = "This is signed string";
  const unSignedString = "This is un-signed string";
  const unSignSignature = 'This is un-signed signature';
  let signSignature: string = '';
  
  beforeAll(() => {
    NativeModules.CryptographicModule.loadKeys()
    NativeModules.CryptographicModule.sign(signedString, (result: string) => {
      signSignature = result;
    })
  })
  it('Validator if string text is signed', () => {
    NativeModules.CryptographicModule.verify(signedString, signSignature, (verifed: boolean) => {
      expect(verifed).toBe(true);
    })
  });
  it('Validator if string text is un-signed', () => {
    NativeModules.CryptographicModule.verify(unSignedString, signSignature, (verifed: boolean) => {
      expect(verifed).toBe(false);
    })
  });
  it('Validator if signature is un-signed', () => {
    NativeModules.CryptographicModule.verify(signedString, unSignSignature, (verifed: boolean) => {
      expect(verifed).toBe(false);
    })
  });
  it('Validator if signature and string text are un-signed', () => {
    NativeModules.CryptographicModule.verify(unSignedString, unSignSignature, (verifed: boolean) => {
      expect(verifed).toBe(false);
    })
  });
});
