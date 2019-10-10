const core = require('@actions/core');
const github = require('@actions/github');

try {
  const product = core.getInput('product');
  const target_tuples = core.getInput('target_tuples');
  const duration = core.getInput('duration');
  const reason = core.getInput('reason');
  console.log(`Private Moratorium of product ${product}, targets ${target_tuples},`);
  console.log(`for duration ${duration}, reason ${reason}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("status", "SUCCEEDED");
//   Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
