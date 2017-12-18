import isEmpty from '../utils/is_empty';
import Serializer from './base';

/**
  @namespace serializers
  @class ArraySerializer
*/
export default class ArraySerializer extends Serializer {
  deserialize(serialized) {
    return isEmpty(serialized) ? null : serialized;
  }

  serialize(deserialized) {
    return isEmpty(deserialized) ? null : deserialize;
  }
}
