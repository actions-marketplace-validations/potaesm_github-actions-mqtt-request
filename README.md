# Request

[Mqtt Request for GitHub Actions.](https://github.com/potaesm/github-actions-mqtt-request)

# Usage

```yml
uses: potaesm/github-actions-mqtt-request@1.0.0
with:
  url: wss://mqtt-broker.com
  topic: global/general
  payload: '{ "message": "Hello World!" }'
  wsOptions: '{ "port": 443 }'
  username: user
  password: p@ssw0rd
  connectTimeout: 30000
```
Ref. [Mqtt](https://www.npmjs.com/package/mqtt)