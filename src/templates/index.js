import atoms from './atoms';
import molecules from './molecules';
import pageTemplate from './page.ejs'
import pageDefaults from './page.json'

const page = {
    name: 'page',
    render: pageTemplate,
    defaults: pageDefaults
}

const all = [
    ...atoms,
    ...molecules,
    page
]

const pages = {
    atoms,
    molecules
}
const pagesNames = Object.keys(pages)

const templates = {
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
        return componentFound ? componentFound : []
    }
}

export default templates