import atoms from './atoms';
import molecules from './molecules';
import page from './page.js'
import 'babel-polyfill'; // Support for older browsers

// ------- Add here new pages from imported components -------- //
const all = [
    page,
    ...atoms,
    ...molecules,
]
// ------------------------------------------------------------//

// Get all page names from the list of components
const pagesNames = all.reduce(function(prev, curr, index, array){
    if(prev.indexOf(curr.page)>= 0) return;
    return prev.concat([curr.page])
}, []).filter(Boolean)

export default {
    getAll: () => all,
    getPageNames: () => pagesNames,
    getByPath: (str = '') => {
        if(!str) return [];
        const [page, component] = str.split('/');

        // Return page root template
        if(!pagesNames.includes(page)){
            return all.filter(elem => elem.name == page).shift();
        }

        // return all page components
        if(page && !component) {
            return all.filter(elem => elem.page == page);
        }

        // search for component
        const componentFound = all.filter(elem => elem.name == component).shift();
        return componentFound ? componentFound : undefined
    }
}