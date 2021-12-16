import ReactDOM from 'react-dom';
import { App } from '../shared/App';

window.addEventListener('load', ()=>{
  ReactDOM.render(<App />, document.getElementById('react-root'));
});
