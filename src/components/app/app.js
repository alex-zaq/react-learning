import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

    const data = [
        {name:'John C.', salary: 800},
        {name:'Alex M.', salary: 3000},
        {name:'Carl W.', salary: 5000},
    ];



    return (
        <div className = "app"> 
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
       
    )
}

export default App