import React, { useCallback, useState } from 'react';
import { View, NativeModules, Image, ScrollView } from 'react-native';
import { Button, SParagraph, TextInput, Paragraph } from '@atatotest-components';
import { useDispatch, useSelector } from 'react-redux';
import { debounce as _debounce } from 'lodash';
import { Colors } from '@atatotest-theme';
import * as images from '@atatotest-assets';
import { getSignature } from '@atatotest-selectors';
import { setSingature } from '@atatotest-actions';
import { styles } from './styles';

const { CryptographicModule } = NativeModules;
interface Props {}

const MAX_CHARACTERS = 256
export const LandingScreen: React.FunctionComponent<Props> = props => {
  const singature = useSelector(getSignature);
  const [stringKey, setStringKey] = useState('');
  const [verified, setVerified] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const onSignPress = useCallback(_debounce(() => {
    if (!stringKey) {
      return;
    }
    CryptographicModule.sign(stringKey, (result: string) => {
      dispatch(setSingature(result));
    });
  }, 600), [stringKey])

  const onVerifyPress = useCallback(_debounce(() => {
    if (!stringKey || !singature) {
      return;
    }
    CryptographicModule.verify(stringKey, singature, (verified: boolean) => {
      setVerified(verified);
    });
  }, 600), [stringKey, singature])

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Type message here"
          mode='outlined'
          multiline
          maxLength={MAX_CHARACTERS}
          style={styles.textInput}
          onChangeText={(value: string) => setStringKey(value)}
        />
        <View style={styles.countContainer}>
          <SParagraph>
            {`${stringKey.length}/${MAX_CHARACTERS}`}
          </SParagraph>
        </View>
        </View>
      <View style={styles.boderContainer}>
        <SParagraph
          color={singature ? Colors.black : Colors.grey700}
        >
          {singature || 'Input/Output singature hex string here'}
        </SParagraph>
      </View>
      <View style={styles.ctaContainer}>
        <Button
          style={styles.ctaButton}
          mode="contained"
          type="medium"
          disabled={!stringKey}
          onPress={onSignPress}
        >
          Sign
        </Button>
        <Button
          style={styles.ctaButton}
          mode="contained"
          type="medium"
          disabled={!stringKey || !singature}
          onPress={onVerifyPress}
        >
          Verify
        </Button>
      </View>
      {
        verified === null ? null : (
          <View>
            <Image
              style={styles.verifyImage}
              source={verified ? images.valid : images.invalid}
            />
            <View style={styles.boderContainer}>
              <Paragraph
                style={styles.verifyText}
                color={Colors.grey700}
              >
                {`Verification success!`}
              </Paragraph>
            </View>
          </View>
        )
      }
    </ScrollView>
  );
};
