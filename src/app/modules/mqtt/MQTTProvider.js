import { Provider } from 'cerebral'

function MQTTProvider(options = {}) {
  console.log('MQTTProvider() called')

  return Provider({
    announce(text) {
      console.log(`MQTTProvider::announce(...) called w/ text: ${text}`)
    } 
  })

}

export default MQTTProvider