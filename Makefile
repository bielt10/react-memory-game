#!/bin/bash
.PHONY: default
.SILENT:


default:

setup:
	docker network create react_network || true

start:
	docker-compose -f docker-compose.yml up --detach --force-recreate --build --remove-orphans

start_no_detach:
	docker-compose -f docker-compose.yml up

stop:
	docker-compose -f docker-compose.yml down --remove-orphans

shell:
	docker-compose -f docker-compose.yml stop react_front
	docker-compose -f docker-compose.yml run --rm --service-ports react_front bash

restart:
	docker-compose -f docker-compose.yml down --remove-orphans
	docker-compose -f docker-compose.yml up --detach --force-recreate --build --remove-orphans

logs:
	docker-compose -f docker-compose.yml logs -f

run-tests:
	docker run -it react_front npm run test

ps:
	docker-compose -f docker-compose.yml ps

clean-containers:
	docker-compose -f docker-compose.yml rm --force --stop -v

clean-volumes:
	docker-compose -f docker-compose.yml down --remove-orphans --volumes

clean-layers:
	-docker images -q -f dangling=true | xargs docker rmi -f

clean-images: clean-layers
	docker-compose -f docker-compose.yml down --remove-orphans --volumes --rmi local

clean-all: clean-layers
	docker-compose -f docker-compose.yml down --remove-orphans --volumes --rmi all