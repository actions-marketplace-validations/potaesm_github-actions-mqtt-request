const core = require('@actions/core');
const mqtt = require('mqtt');

try {
    const optionKeyArr = ['wsOptions', 'username', 'password', 'connectTimeout'];
    const url = core.getInput('url');
    const topic = core.getInput('topic');
    const payload = core.getInput('payload');
    const options = {};
    for (let optionKey of optionKeyArr) {
        const option = core.getInput(optionKey);
        if (!!option) {
            if (option[0] === '{') {
                options[optionKey] = JSON.parse(option);
            } else {
                options[optionKey] = option;
            }
        }
    }
    const client = mqtt.connect(url, options);
    client.on('connect', function () {
        client.subscribe(topic, function (error) {
            if (!error) {
                client.publish(topic, payload);
                client.end();
            } else {
                core.setFailed(JSON.stringify(error));
            }
        });
    });
} catch (error) {
    core.setFailed(JSON.stringify(error));
}