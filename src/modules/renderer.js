import {render} from 'ejs'

/**
 * Attach ejs.render results to Element
 * @param {String} templatePath 
 * @param {Object} options 
 * @returns {String} Rendered template
 */
export default function(templatePath, options) {
    const tpl = require(`../templates/${templatePath}.ejs`)
    const json = require(`../templates/${templatePath}.json`)
    if(!tpl) return;
    if(!options) return tpl(json)
    return tpl(options)
}