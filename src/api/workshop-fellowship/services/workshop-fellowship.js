'use strict';

/**
 * workshop-fellowship service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workshop-fellowship.workshop-fellowship');
