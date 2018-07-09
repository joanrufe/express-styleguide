var fs = require('fs');
var ejs = require('ejs');
var path = require('path');

// @TODO: Apply try {} catch {} to all fs reads
// @TODO: Change logic to be able to take an Array from component.json that build up 2 renders of the component

/**
* Walks directory to build the Styleguide object
* @param {string} dirPath 
* @returns {Object} Styleguide object
*/
function buildPageArray(dirPath) {
    var files = fs.readdirSync(dirPath)
    var renderEjs = [];
    var isEJS = function(str){ return /.*\.ejs$/.test(str) }
    var isJSON = function(str){ return /.*\.json/.test(str) }
 
    var fullPathFiles = files.map(function(file){ return path.join(dirPath,file) })
 
    var renderArray = fullPathFiles.map(function(file, index, all){
        if(isEJS(file)){
            var haveJson = all.filter(function(e){
                return e == file.replace('.ejs', '.json')
            }).length > 0;

            if(haveJson){
                renderEjs.push({
                    ejs: file
                })
            }else{
                return {
                    ejs: file
                }
            }
        }
        
        if(isJSON(file)){
            var index = renderEjs.findIndex(function(e){
                return file == e.ejs.replace('.ejs', '.json')
            });
 
            if(index >= 0){
                return {
                    ejs: renderEjs[index].ejs,
                    json: file
                }
            }
        }
    }).filter(Boolean); // filter(Boolean) -> remove undefined items
 
    return {
        dir: dirPath.replace(/^.*[\\\/]/, ''),
        renderArray: renderArray
    }
 }

 /**
 * Return directories inside a directory
 * @param {string} templateDir 
 * @returns {Array} Directories
 */
function getPages(templateDir) {
    var files = fs.readdirSync(templateDir)
    console.log(files)
    return files.filter(function (file) {
        if (fs.statSync(templateDir + file).isDirectory()) return true
        else return false
    }).map(function(elem){
        console.log(elem)
        return templateDir + elem 
    })
}

/**
 * @param {Array} elems 
 */
function buildMenu (elems){
    return `<ul>${elems.map(function(elem){return elem}).join('')}</ul>`
}

/**
 * Containg ejs file path and json if it exists
 * @param {Object} tpl Object
 */
function processTemplate(tpl){
    var tplString = fs.readFileSync(tpl.ejs, 'utf-8');
    var filename = tpl.ejs.replace(/^.*[\\\/]/, '');

    if(tpl.json){
        var jsonString = fs.readFileSync(tpl.json, 'utf-8');
        var parsedJSON = JSON.parse(jsonString);
        return {
            filename: filename.replace('.ejs', ''),
            render: ejs.compile(tplString),
            defaultArguments: parsedJSON
        };
    }else{
        return {
            filename: filename.replace('.ejs', ''),
            render: ejs.compile(tplString)
        };
    }
}

/**
 * Return processed styleguideArray
 * @param {Array} styleguideArray 
 */
function processArray(styleguideArray){
    return styleguideArray.map(function(pageArray){
        var pageObjectArray = pageArray.renderArray.map(processTemplate)
        
        return {
            name: pageArray.dir,
            menuElem: `<li><a href="/${pageArray.dir}">${pageArray.dir}</a></li>`,
            page: pageObjectArray
        }
    })
}

function renderComponent(item){
    return item.render(item.defaultArguments)
}

function renderPageItem(item){
    return item.page.map(renderComponent)
}

function styleguide(templatesPath){
    var directories = getPages(templatesPath);
    var pageArray = directories.map(buildPageArray);
    
    var styleguideArray = processArray(pageArray);
    return {
        render: function(){
            var menuElems = styleguideArray.map(function(elem){return elem.menuElem})
            return `<div class="menu">${buildMenu(menuElems)}</div>`
        },
        renderPage: function(name){
            var page = styleguideArray.filter(function(elem){
                return elem.name == name
            }).shift()
            if(!page) return 'Page not found'
            return renderPageItem(page)
        },
        getPages: function(){return directories}
    }
}

module.exports = styleguide