import {all, pagesNames} from './templates'
import 'babel-polyfill'; // Support for older browsers

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