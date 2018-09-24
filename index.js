var object = {key: 'value'};

var recipes = Object.assign({},object)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value} );
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key]= value;
return object;

}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, {key});
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}