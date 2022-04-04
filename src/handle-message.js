import Messenger from '@sbspk/pocket-sms';
import config from './config.js';

const messenger = new Messenger({
  deviceUrl: config.device.url,
  username: config.device.username,
  password: config.device.password
});

export default async function handleMessage(message) {
  const data = JSON.parse(message.Body);
  console.log(`Sending message to ${data.phone}.`);
  await messenger.sendSms(data.phone, data.message);
}
