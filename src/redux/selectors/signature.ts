import { SignatureState } from "../types";
import { get as _get } from 'lodash'

export const getSignature = ({ signature }: SignatureState) => _get(signature, 'signature', '');
