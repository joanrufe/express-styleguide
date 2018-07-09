/**
 * Return directories inside a directory
 * @param {string} templateDir 
 * @returns {Array} Directories
 */
export function getPages(templateDir) {
    return fs.readdirSync(templateDir).filter(function (file) {
        if (fs.statSync(templateDir + file).isDirectory()) return true
        else return false
    }).map(function(elem){
        return templateDir + elem 
    })
}