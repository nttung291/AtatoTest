import { StyleSheet } from 'react-native';
import { Colors, CommonSizes } from '@atatotest-theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: CommonSizes.spacing.extraLarge,
    paddingHorizontal: CommonSizes.spacing.medium,
  },
  textInput: {
    width: '100%',
    height: 150,
  },
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: CommonSizes.spacing.extraLarge
  },
  ctaButton: {
    width: 150,
  },
  boderContainer: {
    marginTop: CommonSizes.spacing.medium,
    borderWidth: 0.8,
    borderColor: Colors.grey400,
    paddingVertical: CommonSizes.spacing.small,
    paddingHorizontal: CommonSizes.spacing.small,
    borderRadius: 4,
  },
  countContainer: {
    position: 'absolute',
    right: 10,
    bottom: 20
  },
  verifyImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: CommonSizes.spacing.extraLarge,
    marginBottom: CommonSizes.spacing.medium,
  },
  verifyText: {
    textAlign: 'center'
  }
});
