import React from 'react'
import {render, cleanup, fireEvent, queryByAttribute} from '@testing-library/react'
import CheckAndBookRoom from '../CheckAndBookRoom/index';
import { createStore } from "redux";
import rootReducer from "../../redux/reducers/index";
import { Provider } from 'react-redux';

 afterEach(cleanup)
 
 it('should take a snapshot', () => {

    const CheckAndBookRoomWrapperWithProvider = () => {
        const store = createStore(rootReducer);
        return (
          <Provider store={store}> 
            <CheckAndBookRoom />
          </Provider>
        )
      }
      
    const { asFragment } = render(<CheckAndBookRoomWrapperWithProvider />)
    
    expect(asFragment(<CheckAndBookRoomWrapperWithProvider />)).toMatchSnapshot()
});

it('should surname input exists in Booking Mode only', () => {

    const CheckAndBookRoomWrapperWithProvider = () => {
        const store = createStore(rootReducer);
        return (
          <Provider store={store}> 
            <CheckAndBookRoom isBooking={true} />
          </Provider>
        )
      }
      
    const container = render(<CheckAndBookRoomWrapperWithProvider />);

    const inputEl = container.getByLabelText('surname');

    expect(inputEl.value).toBe('');
});

it('Test surname Text value', () => {

    const CheckAndBookRoomWrapperWithProvider = () => {
        const store = createStore(rootReducer);
        return (
          <Provider store={store}> 
            <CheckAndBookRoom isBooking={true} />
          </Provider>
        )
      }
      
      const container = render(<CheckAndBookRoomWrapperWithProvider />);

      const inputEl = container.getByLabelText('surname');
  
    setTimeout(()=>{
        fireEvent.change(inputEl, {target: {value: 'Bhatnagar'}})
        expect(input.value).toBe('Bhatnagar');
    },200);
   
});
