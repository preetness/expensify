import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>This is from my dashboard component.</div>
);

const AddExpensePage = () => (
	<div>This is from my add expense page.</div>
);

const EditExpensePage = () => (
	<div>This is from my edit expense page.</div>
);

const HelpPage = () => (
	<div>This is from my help page.</div>
);

const NotFoundPage = () => (
	<div>404. Page Not Found. <Link to="/">Go Home</Link>
	</div>
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
			<Link to="/">Dashboard</Link>
			<Link to="/create">Add Expense</Link>
			<Link to="/edit">Edit</Link>
			<Link to="help">Help</Link>
	</header>
);

const routes = (
		<BrowserRouter>
		<div>
		<Header />
		<Switch>
			<Route path="/" component={ExpenseDashboardPage} exact={true} />
			<Route path="/create" component={AddExpensePage} />
			<Route path="/edit" component={EditExpensePage} />
			<Route path="/help" component={HelpPage} />
			<Route component={NotFoundPage} />
		</Switch>
		</div>
			
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));