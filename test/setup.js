import { jsdom } from 'jsdom'
import React from 'react' // eslint-disable-line

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator
