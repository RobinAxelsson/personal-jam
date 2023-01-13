export function getModuleStyleFunctionFactory(styles) {
  return (classNamesAsString) => setClass(styles, classNamesAsString);
}

const setClass = (styles, classNamesAsString) => {
  const classNameArray = classNamesAsString.split(' ');
  const getClassStyle = (name) => styles[name];

  if(classNameArray.length == 1) return getClassStyle(classNamesAsString);
  return classNameArray.map((x) => getClassStyle(x)).join(" ");
}