const app = "I don't do much."
function destructivelyAppendKitten (name) {
  var arr = [...kittens, name]
  return arr
}