import { useState } from "react";
import "./App.css";

function App() {
  const [check, setcheck] = useState(false);
  const [state, setstate] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='App'>
      <form>
        <h1>Delivery address</h1>
        <input
          className='input-font'
          type='text'
          name='deliveryName'
          placeholder='First Name'
          autoComplete='{false}'
          onChange={onChange}
        />
        <input
          className='input-font'
          type='text'
          name='deliveryLastName'
          placeholder='Last Name'
          autoComplete='{false}'
          onChange={onChange}
        />
        <input
          className='input-font'
          type='text'
          name='deliveryAddress'
          placeholder='Address'
          autoComplete='{false}'
          onChange={onChange}
        />
        <input
          className='input-font'
          type='text'
          name='deliveryPhone'
          placeholder='Phone'
          autoComplete='{false}'
          onChange={onChange}
        />

        <h1>Billing address</h1>
        <div className='check'>
          <label htmlFor='checkbox'>Same as Delivery address</label>
          <input
            type='checkbox'
            value='false'
            name='checkbox'
            onChange={() => setcheck(!check)}
          />
        </div>
        <input
          className='input-font'
          type='text'
          name='billingName'
          placeholder='First Name'
          autoComplete='{false}'
          value={check ? state.deliveryName : null}
        />
        <input
          className='input-font'
          type='text'
          name='billingLastName'
          placeholder='Last Name'
          autoComplete='{false}'
          value={check ? state.deliveryLastName : null}
        />
        <input
          className='input-font'
          type='text'
          name='billingAddress'
          placeholder='Address'
          autoComplete='{false}'
          value={check ? state.deliveryAddress : null}
        />
        <input
          className='input-font'
          type='text'
          name='billingPhone'
          placeholder='Phone'
          autoComplete='{false}'
          value={check ? state.deliveryPhone : null}
        />
        <input type='button' className='btn' value='Submit' />
      </form>
    </div>
  );
}

export default App;
