import React from 'react'
import Beauty from './Beauty'
import Image from "../images/photojson/Image.json"
import  {useParams} from 'react-router-dom';
import Parent from '../../parent/Parent';
export default function ProductDetails() {
  const {id} = useParams()
  console.log(id);
  
  return (
    <>
      <Parent />
    </>
  )
}
