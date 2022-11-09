import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const CheckAndBookRoom = React.lazy(()=> import('../src/components/CheckAndBookRoom/index'));
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/book",
    main: () => <div><Suspense fallback={<div>Loading...</div>}><CheckAndBookRoom isBooking={true}/></Suspense></div>
  },
  {
    path: "/check", 
    main: () => <div><Suspense fallback={<div>Loading...</div>}><CheckAndBookRoom isBooking={false}/></Suspense></div>,
  }
];

function App() {
  return (
    <BrowserRouter>
      <h1>Booking App</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "200px",
            background: "#f0f0f0"
          }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Book Room</Link>
            </li>
            <li>
              <Link to="/check">Check Room</Link>
            </li>
          </ul>

			
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
           <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
