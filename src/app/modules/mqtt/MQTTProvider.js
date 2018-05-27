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
    //console.log(`mqtt.connect(${options.mqttUrl},${JSON.stringify(options.mqttOptions,null,2)})`)

    cachedClient.on('connect', function (err) {
      console.info('MQTT: Connected')
      cachedClient.publish('presence',"MQTT React App Client is here!!!")
      // can subscribe to topics now
      const subscriptions = [
        'get/view/#',
        'get/dev/dev01/#',
        'get/dev/dev02/#',
        'get/dev/dev03/#',
        'get/dev/dev04/#',
        'get/dev/dev05/#',
        'get/dev/dev06/#',
        'get/dev/dev07/#',
      ]
      cachedClient.subscribe(subscriptions)
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
              mqttDeviceSignal({path: statePath, value: message.toString()})//Number.parseInt(message,10)})
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
    updateScene(deviceId,value) {
      const topic = `set/dev/${deviceId}/scene`
      getClient().publish(topic,value)
    },
    updateDimLevel(deviceId,value) {
      const topic = `set/dev/${deviceId}/level`
      getClient().publish(topic,`${filterDimValue(value)}`)
    },
    updateSwitch(deviceId,value) {
      const topic = `set/dev/${deviceId}/switch`
      getClient().publish(topic,value ? 'true' : 'false')
    },
  })

}

export default MQTTProvider