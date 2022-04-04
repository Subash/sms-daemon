import AWS from 'aws-sdk';
import { Consumer } from 'sqs-consumer';
import handleMessage from './handle-message.js';
import config from './config.js';

const sqs = new AWS.SQS({
  apiVersion: '2012-11-05',
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region
});

const app = Consumer.create({
  sqs,
  queueUrl: config.aws.queueUrl,
  handleMessage: handleMessage
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();
