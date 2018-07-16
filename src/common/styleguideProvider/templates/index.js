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

export { all, pagesNames }