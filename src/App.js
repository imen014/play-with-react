import './styles/App.css';
import SimpleComponent from './components/SimpleComponent'
import SimpleComponent2 from './components/SimpleComponents2';
import FirstComponent from './components/FirstComponent';
import ButtonComponent from './components/ButtonComponent';
import LinkComponent from './components/LinkButton';
import MyParagraph from './components/SecondComponent';
import ListComponent from './components/ListComponent';
import MyForm from './components/FormComponent';
import DivComponent from './components/DivComponent';

function App() {
  return (
    <div className="App">
      <SimpleComponent />
      <SimpleComponent2 />
      <FirstComponent />
      <ButtonComponent />
      <LinkComponent />
      <MyParagraph />
      <ListComponent />
      <MyForm />
      <DivComponent />
    </div>
  );
}

export default App;
