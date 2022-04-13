import { useState } from 'react';

export default function HandleModalDisplay(){
const [filterOpen,setFilterOpen] =useState(false);

const handleFilter=(val)=>{
  setFilterOpen(filterOpen=>!filterOpen);
}
return {filterOpen,handleFilter}
}
