import styleguideProvider from './common/styleguideProvider'

const $ = jQuery || $

if(typeof $ != 'undefined'){
  $.fn.styleguide = function (options) {
    if(!options.path) throw new Error('Must provide options.path ')

    // get options
    const {path, data} = options
    const tpl = styleguideProvider.getByPath(path)

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
