import { Provider } from 'cerebral'
import mqtt from 'mqtt'

const filterDimValue = value => value < 0 ? 0 : (value > 100 ? 100 : value)

function MQTTProvider(options = {}) {
  let cachedClient = null
  let mqttDeviceSignal = null
  let mqttViewSignal = null

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
      cachedClient.subscribe('get/view/#')
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
      // !!! message is a Buffer
      //console.log(`mqtt message received: ${topic} = ${message}`)
      const topicItems = topic.split('/')
      if (topicItems[0] === "get") {
        const stateItems = topicItems.slice(2)
        const statePath = stateItems.join(".")
        switch (topicItems[1]) {
          case "dev":
            if (mqttDeviceSignal) {
              //console.log(`${statePath} = ${message}`)
              mqttDeviceSignal({path: statePath, value: Number.parseInt(message,10)})
            }
            break;
          case "view":
            //console.log(statePath)
            if (mqttViewSignal) {
              mqttViewSignal({path: statePath, value: message.toString()})
            }
            break;
          default:
            break
        }
      }
    })
    return cachedClient
  }

  return Provider({
    initialize(options) {
      mqttDeviceSignal = options.mqttDevSignal
      mqttViewSignal = options.mqttViewSignal
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