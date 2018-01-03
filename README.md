[![Fly.io Community Slack](https://fly.io/slack/badge.svg)](https://fly.io/slack/)

# Load Balancing a Fleet of Docker Containers Using Fly

The companion article for this example code is available [here](https://fly.io/articles/load-balancing-a-fleet-of-docker-containers-using-fly).

This is a very simple Node.js HTTP server that responds with the SERVER_NAME environment variable. There's also an Nginx folder which contains configuration details for an Nginx proxy. There is a branch `with-wormhole` which shows container fleet management with Fly + Wormhole in contrast to the Nginx approach.

You can checkout this Pull Request to see the diff https://github.com/superfly/fly-docker-example/pull/1 !

Wormhole is an open source utility that securely connects two end-points. You can find it on GitHub [here](https://github.com/superfly/wormhole).

<p align="center">
  <img src="https://github.com/superfly/wormhole/raw/master/wormhole.png">
</p>
