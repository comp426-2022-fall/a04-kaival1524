#! /usr/bin/env node

import { roll } from './lib/roll.js';
import express from "express";
import minimist from 'minimist';

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port ? args.port: 5000;

app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.status(200).send("200 OK");
});

app.get('/app/roll/', (req, res) => {
    res.json.roll(6, 2, 1);
    res.status(200).send(roll(6, 2, 1));
});