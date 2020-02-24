// Longhand:

const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require('mobx/runInAction');

const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;

// Shorthand:

import { observable, action, runInAction } from 'mobx';

const { store, form, loading, errors, entity } = this.props;

// or
const { store, form, loading, errors, entity: contact } = this.props;
