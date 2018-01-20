#!/usr/bin/env node
const imessage = require('osa-imessage')
var program = require('commander')

program
    .version('0.1.0')
    .description('CLI iMessage')
    .option('-n, --number [number]', 'The phone number to send a message to (REQUIRED)')
    .option('-m, --message [message]', 'Message to send (REQUIRED)')
    .option('--name', 'Use name contact')
    .parse(process.argv);


if(program.number) imessage.send(program.number, program.message || "test", 'sms')
else console.error("The phone number is required")