import { Provider } from 'cerebral'
import mqtt from 'mqtt'

const filterDimValue = value => value < 0 ? 0 : (value > 100 ? 100 : value)

function MQTTProvider(options = {}) {
  let cachedClient = null

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
    return cachedClient
  }

  return Provider({
    connect() {
      const client = getClient()
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