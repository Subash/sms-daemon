import Messenger from '@sbspk/pocket-sms';
import config from './config.js';

const messenger = new Messenger({
  deviceUrl: config.device.url,
  username: config.device.username,
  password: config.device.password
});

async function sendMessage(message) {
  const data = JSON.parse(message.Body);
  console.log(`Sending message to ${data.phone}.`);
  await messenger.sendMessage(data.phone, data.message);
}

async function deleteLastMessage() {
  const messages = await messenger.getMessages();
  const message = messages.at(-1);
  if (!message) return;
  console.log(`Deleting last message with id ${message.id}.`);
  await messenger.deleteMessage(message.id);
}

export default async function handleMessage(message) {
  await deleteLastMessage();
  await sendMessage(message);
}
