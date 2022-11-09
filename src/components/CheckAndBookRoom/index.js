import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImageIdicator from '../IconIndicator/index';
import './style.css';
import * as actionType from "../../redux/actions/actionTypes";


const CheckAndBookRoom = ({isBooking}) =>{
    
   const availableRoomsArr = [101,102,201,203];    

   const dispatch = useDispatch();

   const bookings = useSelector((state) => state.getBookings.bookings);

   let isBookingConfirmed = useSelector((state) => state.addBookings.bookings);

    const initialState = {
        surname:'',
        room:0,
        dateCal:'',
        isAvaialble:false,
        isVisible:false
    }
    
    const [state, setState]=useState({...initialState});

    useEffect(()=>{
        debugger;
        dispatch({type: actionType.GET_BOOKINGS});
    },[]);
    
    useEffect(()=>{
        if(isBookingConfirmed && +isBookingConfirmed.room === +state.room){
            debugger;
            alert(`Room No. ${isBookingConfirmed.room} Booked Succefully For ${isBookingConfirmed.surname} at ${isBookingConfirmed.dateCal}`);
            setState({...initialState});
            isBookingConfirmed = null;
        }
    },[isBookingConfirmed]);

    function compareDates(dt1, dt2){
     debugger;
     if(dt1.getDate() === dt2.getDate() && dt1.getMonth() === dt2.getMonth() && dt1.getFullYear() === dt2.getFullYear()){
         return true;
     }
      return false
    }

    const onSubmitHandler = (event) =>{
        debugger;
        event.preventDefault();
        const {surname, room, dateCal } = state;
        if(isBooking){
            dispatch({type: actionType.ADD_BOOKINGS, payload:{surname, room: +room, dateCal: new Date(dateCal) }});
        } else {
            if(bookings.find(x=> (compareDates(new Date(x.dateCal), new Date(dateCal)) && x.room === +state.room))){
                setState({...state, isVisible:true, isAvaialble:false});
                alert('Room Not Available');
            }else{
                setState({...state, isVisible:true, isAvaialble:true});
                alert('Room is Available!!');
            }
        }
    };

    const onChangeHandler = (event) =>{
        debugger;
        let name = event.target.name;
        let value = event.target.value;
        setState({...state, [name]: value});
    };

    const surname = isBooking ? <><td>
    <label for="surname">Surname</label>
    </td>
    <td>
    <input aria-label="surname" type="text" id="surname" name="surname" onChange={(e)=>onChangeHandler(e)} value={state.surname} required/>
    </td></> : null;

    return (
        <>
         <form onSubmit={onSubmitHandler}>
             <table>
                 <th>
                   <td><strong><span>{isBooking ? 'ADD BOOKING' : 'CHECK ROOM'}</span></strong></td>  
                 </th>
                 <tr>
                     <td colSpan={2}><hr/></td>
                 </tr>
                 <tr>
                     {surname}
                 </tr>
                 <tr>
                     <td>
                     <label for="room">Room</label>
                     </td>
                     <td>
                     <select id="room" name="room" value={state.room} onChange={onChangeHandler}>
                         <option value={0} disabled selected>Select Room</option>
                     {availableRoomsArr.map((item,indx)=>{
                       return <option value={item} key={indx}>{item}</option>
                     })}
                     </select>
                     </td>
                 </tr>
                 <tr>
                     <td>
                     <label for="dateCal">Date</label>
                     </td>
                     <td>
                     <input name="dateCal" id="dateCal" value={state.date} type="date" required onChange={onChangeHandler} />
                     </td>
                 </tr>
                 <tr>
                     <td></td>
                     <td></td>
                 </tr>
                 <tr>
                     <td></td>
                     <td className={'btn-section'}>
                         <button name={isBooking ? 'Add' : 'Check'} className={'btn-submit'} type='submit'>{isBooking ? 'Add' : 'Check'}</button>
                        <ImageIdicator isVisible={!isBooking && state.isVisible} isAvaialble={state.isAvaialble}/>
                     </td>
                 </tr>
             </table>
         </form>
        </>
    )
}

export default React.memo(CheckAndBookRoom);