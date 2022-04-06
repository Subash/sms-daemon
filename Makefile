PATH      := $(PATH):$(PWD)/node_modules/.bin
SHELL     := env PATH=$(PATH) /bin/bash
HASH      := $(shell git rev-parse --short HEAD)
CONTAINER := subash/sms-daemon

dev:
	@node-dev src/app.js

start:
	docker run --env-file .env -d $(CONTAINER):latest

build:
	docker buildx build --platform linux/amd64,linux/arm64 --push --tag $(CONTAINER):$(HASH) .
	docker buildx build --platform linux/amd64,linux/arm64 --push --tag $(CONTAINER):latest .

.PHONY: dev start build
