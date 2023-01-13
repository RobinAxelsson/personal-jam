export function EnsureValidArray(array) {
  if (!(array instanceof Array) || array.length === 0)
    throw new Error("Invalid array, got: " + array);
}

export function ensureValidString(stringValue){
    if(stringValue === undefined || 
      stringValue === null || 
      stringValue.trim().length() === 0)
    throw new Error("Invalid string value, got: ", stringValue);
}