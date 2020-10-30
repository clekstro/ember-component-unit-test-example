import Application from 'writing-component-unit-tests/app';
import config from 'writing-component-unit-tests/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
