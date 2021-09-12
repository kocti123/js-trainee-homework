function concatStrings(str, separator) {
  let result = [str];
  const sep = typeof separator === 'string' ? separator : '';
  return function concat(str) {
    if (typeof str !== 'string') return result.join(sep);
    result = [...result, str];
    return concat;
  };
}

