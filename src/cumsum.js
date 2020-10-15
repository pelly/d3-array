export default function cumsum(values, valueof) {
    var sum = 0, index = 0;
    let fn = null;
    if (valueof === undefined) {
	fn = v => (sum += +v || 0)
    } else {
	fn = v => (sum += +valueof(v, index++, values) || 0)
    }
    
  return Float64Array.from(values, );
}
