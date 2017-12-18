import isEmpty from '../utils/is_empty';
import Serializer from './base';

/**
  @namespace serializers
  @class ArraySerializer
*/
export default class ArraySerializer extends Serializer {
  deserialize(serialized) {
    if (Array.isArray(serialized)) {
      return serialized;
    }

    return isEmpty(serialized) ? null : Array.from(serialized);
  }

  serialize(deserialized) {
    if (Array.isArray(deserialized)) {
      return deserialized;
    }

    return isEmpty(deserialized) ? null : Array.from(deserialized);
  }
}
