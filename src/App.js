import './App.css';
import F1 from './F1';
import Footer from './Footer';
import Note from './Note';
import Propss from './Propss';
import Emoji from './Emoji';
import EmojiPedia from './EmojiPedia';
import Time from './Time';
import Form from './Form';
import ComplexForm from './ComplexForm';
import Form1 from './Form1';
function New(Emoji){
  return (
  <EmojiPedia
  name={
    Emoji.name}
  content={Emoji.content}
  key={Emoji.id}/>
  
  )}
function App() {

  return (

    <div className="back">
      <Form1/>
      <Footer/>
      <F1/>
      {/* <F1/>
  
    {Emoji.map(New)}
    
    <Time/>
    <Footer/>
    {/* <F1/>
    <Note/>
    <Footer/>
    <Propss
    name="N Bhargav Sai"/> 
     <ComplexForm/> */}

    </div>
  );
}



export default App;
