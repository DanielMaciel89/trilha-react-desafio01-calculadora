import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row,} from "./style";
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState ('0');
  const [firstNumber, setFirstNumber] = useState ('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () =>{
setCurrentNumber('0');
setFirstNumber('0');
setOperation('')
  }

  const handleAddNumber = (num) => {
   setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
        }

           const handleSumNumber = () =>{

          if(firstNumber === '0'){
            setFirstNumber(Number(currentNumber));
            setCurrentNumber('0');
            setOperation('+')
          }else{
            const sum = Number(firstNumber) + Number(currentNumber)
            setCurrentNumber(String(sum));
            setOperation('')
            
          }
        }

        const handleSubNumber = () =>{

          if(firstNumber === '0'){
            setFirstNumber(Number(currentNumber));
            setCurrentNumber('0');
            setOperation('-')
          }else{
            const sub = Number(firstNumber) - Number(currentNumber)
            setCurrentNumber(String(sub));
            setOperation('')
            
          }
        }

        const handleDivNumber = () =>{

          if(firstNumber === '0'){
            setFirstNumber(Number(currentNumber));
            setCurrentNumber('0');
            setOperation('/')
          }else{
            const divisao = Number(firstNumber) / Number(currentNumber)
            setCurrentNumber(String(divisao));
            setOperation('')
            
          }
        }

        const handleMultNumber = () =>{

          if(firstNumber === '0'){
            setFirstNumber(Number(currentNumber));
            setCurrentNumber('0');
            setOperation('x')
          }else{
            const mult = Number(firstNumber) * Number(currentNumber)
            setCurrentNumber(String(mult));
            setOperation('')
            
          }
        }

        const handlePorcentNumber = () =>{

          if(firstNumber === '0'){
            setFirstNumber(Number(currentNumber));
            setCurrentNumber('0');
            setOperation('%')
          }else{
            const porcent = Number(firstNumber) * Number(currentNumber) / 100;
            setCurrentNumber(String(porcent));
            setOperation('')
            
          }
        }

        const handleEquals = () =>{

          if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
           switch(operation){
            case '+':
            handleSumNumber();
            break;
            case '-':
            handleSubNumber();
            break;
            case '/':
            handleDivNumber();
            break;
            case 'x':
            handleMultNumber();
            break;
            case '%':
            handlePorcentNumber();
            break;
            default:
            break;
           }
          }
        }

  return (
      <Container>
    <Content>
      <Input value={currentNumber} />
      <Row>
      <Button label="CC" onClick={handleMultNumber}/>
      <Button label="%" onClick={handlePorcentNumber}/>
      <Button label="C" onClick={handleOnClear}/>
      <Button label="/" onClick={() => handleAddNumber('')}/>
      </Row>
      

      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="x" onClick={handleMultNumber}/>
      </Row>

      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="-" onClick={handleSubNumber}/>
      </Row>
      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
      <Button label="2" onClick={() => handleAddNumber('2')}/>
      <Button label="3" onClick={() => handleAddNumber('3')}/>
      <Button label="+" onClick= {handleSumNumber}/>
      
      </Row>
      <Row>
      <Button label="." onClick={() => handleAddNumber('.')}/>
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      <Button label="." onClick={() => handleAddNumber('')}/>
      <Button label=" = " onClick={handleEquals}/>
      </Row>


     
     
      </Content>
      </Container>
  );
}

export default App;
