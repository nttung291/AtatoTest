package com.atatotest;
import android.annotation.SuppressLint;
import android.hardware.fingerprint.FingerprintManager;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyProperties;
import android.util.Base64;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.KeyPairGenerator;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.UnrecoverableEntryException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.security.spec.ECGenParameterSpec;
import java.util.Map;
import java.util.HashMap;

public class CryptographicModule extends ReactContextBaseJavaModule{
    CryptographicModule(ReactApplicationContext context) {
        super(context);
    }
    CryptographicModule() {
    }
    private String KEYSTORE_NAME = "AndroidKeyStore";
    private String KEY_NAME = "AndroidECDSAKey";
    private KeyStore keyStore;
    @NonNull
    @Override
    public String getName() {
        return "CryptographicModule";
    }

    @SuppressLint("NewApi")
    public void generateKeys(){
        try {

            keyStore = KeyStore.getInstance(KEYSTORE_NAME);
            keyStore.load(null);

            if(!keyStore.containsAlias(KEY_NAME)) {
                KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance(KeyProperties.KEY_ALGORITHM_EC, KEYSTORE_NAME);
                keyPairGenerator.initialize(
                        new KeyGenParameterSpec.Builder(KEY_NAME,
                                KeyProperties.PURPOSE_SIGN | KeyProperties.PURPOSE_VERIFY)
                                .setDigests(KeyProperties.DIGEST_SHA256,
                                        KeyProperties.DIGEST_SHA512)
                                .setAlgorithmParameterSpec(new ECGenParameterSpec("secp256r1"))
                                .setUserAuthenticationRequired(false)
                                .build());
                keyPairGenerator.generateKeyPair();
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (NoSuchProviderException e) {
            e.printStackTrace();
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @ReactMethod
    public void loadKeys(){
        try {
            keyStore = KeyStore.getInstance(KEYSTORE_NAME);
            keyStore.load(null);
            if(!keyStore.containsAlias(KEY_NAME)) {
                generateKeys();
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod()
    public String sign(String inputStr, Callback cb){
        try {
            keyStore = KeyStore.getInstance(KEYSTORE_NAME);
            keyStore.load(null);
            KeyStore.Entry entry = keyStore.getEntry(KEY_NAME, null);
            Signature signature = Signature.getInstance("SHA256withECDSA");
            signature.initSign(((KeyStore.PrivateKeyEntry) entry).getPrivateKey());
            signature.update(inputStr.getBytes());
            byte[] signedBytes = signature.sign();
            String result = Base64.encodeToString(signedBytes, Base64.DEFAULT);
            cb.invoke(result);
            return result;
        } catch (SignatureException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (UnrecoverableEntryException e) {
            e.printStackTrace();
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        }
        return null;
    }

    @ReactMethod
    public boolean verify(String input, String signedSignature, Callback cb){
        try {
            keyStore = KeyStore.getInstance(KEYSTORE_NAME);
            keyStore.load(null);
            KeyStore.Entry entry = keyStore.getEntry(KEY_NAME, null);
            if (!(entry instanceof KeyStore.PrivateKeyEntry)) {
                return false;
            }
            Signature s = Signature.getInstance("SHA256withECDSA");
            s.initVerify(((KeyStore.PrivateKeyEntry) entry).getCertificate());
            s.update(input.getBytes());
            byte[] signatureBytes = Base64.decode(signedSignature, Base64.NO_WRAP);
            boolean isVerifed = s.verify(signatureBytes);
            cb.invoke(isVerifed);
            return isVerifed;
        } catch (SignatureException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (UnrecoverableEntryException e) {
            e.printStackTrace();
        }
        return false;
    }
}
