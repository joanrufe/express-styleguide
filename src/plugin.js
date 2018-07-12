import templates from './common/templates'

const $ = jQuery || $

if(typeof $ != 'undefined'){
  $.fn.styleguide = function (options) {
    if(!options.path) throw new Error('Must provide options.path ')

    // get options
    const {path, data} = options
    const tpl = templates.getByPath(path)

    // Render
    if(!data) this.html(tpl.render(tpl.defaults));
    else this.html(
      tpl.render({
        ...tpl.defaults,
        data
      })
    );
    // Return itself to chain jquery methods 
    return this;
  }
}
