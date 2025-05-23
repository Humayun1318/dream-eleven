import { useState } from 'react';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer/Footer';
import { addToLSWithKeyValues, getItemFromLSByKey } from './components/utils/utils';

function App() {
  const [coin, setCoin] = useState(0);
  const [value, setValue] = useState('');
  
  const handleSetFreeCoin = () => {
    setCoin(coin + 50000)
    forReactToastify('50000 Credit Added to Your Account!!🪙', 'success', 'top-center')
  }
  //for the toast
  const forReactToastify = (message, toastType, toastPosition) => {
    
    if (toastType === 'success') {
      toast.success(message, {
        autoClose: 3000,
        position: toastPosition,
      });
    } else if (toastType === 'warn') {
      toast.warn(message, {
        autoClose: 3000,
        position: toastPosition,
      });
    } else if (toastType === 'info') {
      toast.info(message, {
        autoClose: 3000,
        position: toastPosition,
      });
    }
  };
  
  //for subscribe btn handle 
  const subscribedBtn = () => {
    
    const existingValueInLS = getItemFromLSByKey('email');
    const indexOfAt = value.indexOf("@");
    const indexOfDot = value.lastIndexOf(".");
    
    if (
      indexOfAt <= 0 || // '@' is missing or at the start
      indexOfAt === value.length - 1 || // '@' is at the end
      indexOfDot <= indexOfAt + 1 || // '.' is missing after '@' or is immediately after '@'
      indexOfDot === value.length - 1 // '.' is the last character
    ) {
      return forReactToastify('Please provide a valid Email!!', 'info', 'top-center');
    }

    for (const existValue of existingValueInLS) {
      if (value === existValue) {
        setValue('');
        return forReactToastify('You are already subscribed. Thanks for with us!!❤️', 'info', 'top-center');
      }
    }
    addToLSWithKeyValues('email', value);
    forReactToastify('Thanks for subscribing!! Stay with us!!❤️', 'success', 'top-center');
    setValue('')
  }

  //for the subscribe onChange input
  const subscribed = e => {
    setValue(e.target.value);
  }
  
  return (
    <div>
      <Header coin={coin}
        handleSetFreeCoin={handleSetFreeCoin}
      >
      </Header>
      <MainSection
        coin={coin}
        setCoin={setCoin}
        forReactToastify={forReactToastify}
        subscribed={subscribed}
        subscribedBtn={subscribedBtn}
        value={value}
      ></MainSection>
      <ToastContainer />
      <Footer
        subscribedBtn={subscribedBtn}
        subscribed={subscribed}
      ></Footer>
    </div>
  )
}

export default App
