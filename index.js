const app = "I don't do much."
function destructivelyAppendKitten (name) {
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(kittens.length)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var arr = [...kittens, name]
  return arr
}

function prependKitten(name) {
  var arr = [name, ...kittens]
  return arr
}

function removeLastKitten() {
  var arr = kittens.slice(kittens.length)
  return arr
}




















