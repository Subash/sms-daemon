import 'dotenv/config';
import fromEnv from './utils/from-env.js';

export default {
  aws: {
    accessKeyId: fromEnv('AWS_SMS_QUEUE_ACCESS_KEY_ID'),
    secretAccessKey: fromEnv('AWS_SMS_QUEUE_SECRET_ACCESS_KEY'),
    queueUrl: fromEnv('AWS_SMS_QUEUE_URL'),
    region: fromEnv('AWS_SMS_QUEUE_REGION')
  },
  device: {
    url: fromEnv('SENDER_DEVICE_URL'),
    username: fromEnv('SENDER_DEVICE_USERNAME'),
    password: fromEnv('SENDER_DEVICE_PASSWORD')
  }
};
