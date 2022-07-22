package com.atatotest;
import static org.junit.Assert.assertEquals;

import android.util.Log;
import com.facebook.react.bridge.Callback;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class CryptographicTest {
    private static CryptographicModule cryptographicModule = new CryptographicModule();
    private static String signedText = "This is singed text";
    private static String unSignedText = "This is un-singed text";
    private static String unSignedSignature = "This is un-singed signature";
    private static String signedSignature = "";
    @BeforeClass
    public static void beforeAll(){
        cryptographicModule.loadKeys();
    }

    @Before
    public void beforeEach(){
        signedSignature = cryptographicModule.sign(signedText, new Callback() {
            @Override
            public void invoke(Object... args) {

            }
        });
    }
}
