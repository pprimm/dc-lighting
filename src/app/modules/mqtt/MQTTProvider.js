import { Provider } from 'cerebral'
import mqtt from 'mqtt'

const filterDimValue = value => value < 0 ? 0 : (value > 100 ? 100 : value)

const DEVICE_REGEX = /get\/(.*)\/(.*)/

function MQTTProvider(options = {}) {
  let cachedClient = null
  let mqttDeviceSignal = null

  const getClient = () => {
    if (cachedClient) {
      return cachedClient;
    }
    cachedClient = mqtt.connect(options.mqttUrl,options.mqttOptions)
    console.log(`mqtt.connect(${options.mqttUrl},${options.mqttOptions})`)

    cachedClient.on('connect', function (err) {
      console.info('MQTT: Connected')
      cachedClient.publish('presence',"MQTT React App Client is here!!!")
      // can subscribe to topics now
      cachedClient.subscribe('get/dev/#')
    })

    cachedClient.on('close', function (err) {
      console.warn('MQTT: Disconnected')
    })

    cachedClient.on('error', function (err) {
      console.warn('MQTT: ' + err)
    })

    cachedClient.on('reconnect', function (err) {
      console.info('MQTT: Reconnecting to MQTT Broker')
    })

    cachedClient.on('message', function (topic, message) {
      console.log(`mqtt message received: ${topic} = ${message}`)
      const topicItems = topic.split('/')
      if (topicItems[0] === "get") {
        switch (topicItems[1]) {
          case "dev":
            const stateItems = topicItems.slice(2)
            const statePath = stateItems.join(".")
            console.log(`${statePath} = ${message}`)
            if (mqttDeviceSignal) {
              mqttDeviceSignal({path: statePath, value: Number.parseInt(message,10)})
            }
            break;
          case "view":
            break;
          default:
            break;
        }
      }
    })
    return cachedClient
  }

  return Provider({
    initialize(options) {
      mqttDeviceSignal = options.mqttSignal;
    },
    connect() {
      getClient()
    },
    announce(text) {
      console.log(`MQTTProvider::announce(...) called w/ text: ${text}`)
    },
    updateDimLevel(deviceID,value) {
      const topic = `set/dev/${deviceID}/level`
      getClient().publish(topic,`${filterDimValue(value)}`)
    }
  })

}

export default MQTTProvider