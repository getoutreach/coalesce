import isEmpty from '../utils/is_empty';
import Serializer from './base';

/**
  @namespace serializers
  @class JsonSerializer
*/
export default class JsonSerializer extends Serializer {
  deserialize(serialized) {
    return isEmpty(serialized) ? null : JSON.parse(serialized);
  }

  serialize(deserialized) {
    return isEmpty(deserialized) ? null : JSON.stringify(deserialized);
  }
}
