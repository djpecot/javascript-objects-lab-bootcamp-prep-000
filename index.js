var recipes = {bread:"whole wheat"}

key = "meat"
value = "ham"

object = recipes

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

<<<<<<< HEAD

key = 'bread'


function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
=======
object = recipes
key = 'bread'

function deleteFromObjectByKey(object, key){
  delete object[key]
  return object
}


function deleteFromObjectByKey(object, key){
>>>>>>> 5335044e67631ac20eee8c3a059945620368fffc
  delete object[key]
  return object
}

