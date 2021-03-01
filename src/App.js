import './App.css';
import Welcome from './assignmemnts/day5/Welcome';
import CreateElementDemo from './assignmemnts/day5/CreateElementDemo';
import Hello from './assignmemnts/props_state/Hello';
import ArrowDemo from './assignmemnts/props_state/ArrowDemo';
import ClassDemo from './assignmemnts/props_state/ClassDemo';
import StateDemo from './assignmemnts/props_state/StateDemo';
import Counter from './assignmemnts/props_state/Counter';
import DestructuringDemo from './assignmemnts/events/DestructuringDemo';
import DestructuringDemoTwo from './assignmemnts/events/DestructuringDemoTwo';
import DestructuringClass from './assignmemnts/events/DestructuringClass';
import EventDemoFunc from './assignmemnts/events/EventDemoFunc';
import EventDemoClass from './assignmemnts/events/EventDemoClass';
import BindDemo from './assignmemnts/events/BindDemo';

function App() {
	return (
		<div className='App'>
			{/* <Welcome />
			<CreateElementDemo />
			<Hello />
			<ArrowDemo EmpId='101' EmpName='Prashant' />
			<ClassDemo name='Prashant' rol='Programmer' />
			<StateDemo />
			<Counter />
			<DestructuringDemo studRoll='101' studName='Raj' mark='85' />
			<DestructuringDemoTwo empId='emp101' empName='Prashant' salary='65000' /> 
			<DestructuringClass companyName='Thinkquotient' Address='Pune' />
			<EventDemoFunc />
			<EventDemoClass />*/}
			<BindDemo />
		</div>
	);
}

export default App;
