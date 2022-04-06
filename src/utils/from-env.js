export default function fromEnv(key) {
  if (process.env[key]) return process.env[key];
  throw new Error(`Please set the \`${key}\` environment variable.`);
}
