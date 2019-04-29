const EventEmitter = require('events')
const define = Object.defineProperty

class Operation extends EventEmitter {
  static setOutPuts(outputs) {
    define(this.prototype, 'outputs', {
      value: createOutputs(outputs)
    })
  }

  on(output, handler) {
    if (this.outputs[output]) {
      return this.addListener(output, handler)
    }
    throw new Error(`Invalid output "${output}" to operation ${this.constructor.name}.`)
  }
}

const createOutputs = (outputsArray) => {
  return outputsArray.reduce((obj, output) => {
    obj[output] = output
    return obj
  }, Object.create(null))
}

module.exports = Operation
/**
 * https://nodejs.org/dist/latest-v10.x/docs/api/events.html#events_class_eventemitter
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */