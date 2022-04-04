build:
	@docker build -t subash/sms-daemon .

start:
	@docker run --env-file .env -d subash/sms-daemon

.PHONY: build start
