import {render} from 'ejs'

/**
 * Attach ejs.render results to Element
 * @param {String} templatePath 
 * @param {Object} options 
 * @param {Element} elem 
 */
export default function(templatePath, options, elem) {
    debugger
    return import(`../templates/${templatePath}.ejs`)
        .then(function(ejsString) {
            debugger
            const res = render(ejsString.default(options)).trim()
            debugger
            if (!elem) return res
            elem.innerHTML = res
        })
}