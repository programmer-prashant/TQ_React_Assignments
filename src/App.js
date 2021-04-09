import './App.css';
// *************************************************** React Hooks ********************************************
import ComponentP from './hooks/useContext_useCallback/ComponentP';
import { UserProvider } from './hooks/useContext_useCallback/ContextDemo';
import ConditionalDemo from './hooks/useState_useEffect/ConditionalDemo';
import HoockCounterDemo from './hooks/useState_useEffect/HoockCounterDemo';
import HookFormDemo from './hooks/useState_useEffect/HookFormDemo';
import UseEffectHookDemo from './hooks/useState_useEffect/UseEffectHookDemo';
import UseState_array from './hooks/useState_useEffect/UseState_array';
import UseState_object from './hooks/useState_useEffect/useState_object';
import Main from './routing/Main';

// ************************************************** Core React ********************************************
// import Welcome from './assignmemnts/reactBasics/Welcome';
// import CreateElementDemo from './assignmemnts/reactBasics/CreateElementDemo';
// import Hello from './assignmemnts/props_state/Hello';
// import ArrowDemo from './assignmemnts/props_state/ArrowDemo';
// import ClassDemo from './assignmemnts/props_state/ClassDemo';
// import StateDemo from './assignmemnts/props_state/StateDemo';
// import Counter from './assignmemnts/props_state/Counter';
// import DestructuringDemo from './assignmemnts/events_and_destructuring/DestructuringDemo';
// import DestructuringDemoTwo from './assignmemnts/events_and_destructuring/DestructuringDemoTwo';
// import DestructuringClass from './assignmemnts/events_and_destructuring/DestructuringClass';
// import EventDemoFunc from './assignmemnts/events_and_destructuring/EventDemoFunc';
// import EventDemoClass from './assignmemnts/events_and_destructuring/EventDemoClass';
// import BindDemo from './assignmemnts/events_and_destructuring/BindDemo';
// import ParentEvent from './assignmemnts/events_and_destructuring/ParentEvent';
// import ListDemo from './assignmemnts/listRendering_and_Css/ListDemo';
// import ListDemoTwo from './assignmemnts/listRendering_and_Css/ListDemoTwo';
// import KeyDemo from './assignmemnts/listRendering_and_Css/KeyDemo';
// import ListDemoThree from './assignmemnts/listRendering_and_Css/ListDemoThree';
// import StyleDemo from './assignmemnts/listRendering_and_Css/StyleDemo';
// import StyleModule from './assignmemnts/listRendering_and_Css/StyleModule';
// import FormDemo from './assignmemnts/forms_and_lifeCycle/FormDemo';
// import Uncontrolled from './assignmemnts/forms_and_lifeCycle/Uncontrolled';
// import FormDemoTwo from './assignmemnts/forms_and_lifeCycle/FormDemoTwo';
// import ChildrenDemo from './assignmemnts/fragments_memo_portals/ChildrenDemo';
// import CounterExample from './assignmemnts/fragments_memo_portals/CounterExample';
// import FragDemo from './assignmemnts/fragments_memo_portals/FragDemo';
// import FocusInput from './assignmemnts/fragments_memo_portals/FocusInput';
// import ClickCounter from './assignmemnts/fragments_memo_portals/ClickCounter';
// import HoverCounter from './assignmemnts/fragments_memo_portals/HoverCounter';
// import MemoComp from './assignmemnts/memo/MemoComp';
// import CrudExample from './assignmemnts/curd/CURD';
// import ComponentA from './assignmemnts/context/ComponentA';
// import { UserProvider } from './assignmemnts/context/UserContex';
// import GETRequest from './assignmemnts/http/GETRequest';

function App() {
	return (
		<div className='App'>
			{/* *****************************************Core React**************************************** */}
			{/* 

			<Welcome />
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
			<BindDemo />
			<EventDemoClass />
			<ParentEvent />
			<ListDemo />
			<ListDemoTwo />
			<KeyDemo />
			<ListDemoThree />
			<StyleDemo />
			<StyleModule />
			<FormDemo />
			<Uncontrolled />
			<FormDemoTwo />
			
			<ChildrenDemo name='Prashant' age='22'>
				<p>Children Props</p>
			</ChildrenDemo>
			<ChildrenDemo name='Sonali' age='24'>
				<button>Click Me</button>
			</ChildrenDemo>
			<ChildrenDemo name='Pragati' age='26'>
				<h3>Learning React</h3>
			</ChildrenDemo>
			<CounterExample />
			<FragDemo />
			<FocusInput />
			<ClickCounter />
			<HoverCounter />
			<MemoComp name='Prashant from Memo' />
			<UserProvider value='Prashant'>
				<ComponentA />
			</UserProvider>
			<CrudExample />
			<GETRequest />
			*/}
			{/* *******************************************React Hooks************************************* */}
			{/* 

			<HookFormDemo />
			<UseEffectHookDemo />
			<ConditionalDemo /> 
			
			<UserProvider value={'Red'}>
				<ComponentP />
			</UserProvider>
			<UseState_array />
			<UseState_object />
			<HoockCounterDemo />
			*/}
			<Main />
		</div>
	);
}

export default App;
