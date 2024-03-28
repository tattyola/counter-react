import React, {useState} from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {

    const [counts, setCounts] = useState(0)
    const logo = 'Counter App'

    return (
        <div>
            <Header logo={logo}/>
            <Counter
                counts={counts}
                setCounts={setCounts}
            />
        </div>
    );
}
export default App;
