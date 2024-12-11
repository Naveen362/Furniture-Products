import React from 'react'
import { useNavigation } from 'react-router-dom'
const SubmitBtn = ({text}) => {
  const navigate=useNavigation();
  const issubmitting=navigate ?.state==="submitting";
  return (
   <button className='btn btn-primary btn-block' type="submit" disabled={issubmitting}>
    {issubmitting ? (<span className='loading loading-spinner'>sending...</span>):( text ||"Submit")}
    </button>
  )
}

export default SubmitBtn