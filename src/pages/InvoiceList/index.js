import React from 'react'
import Invoices, {Invoice} from '../../components/Invoices';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function InvoiceList() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/home/invoices/create")
    }

  return (
    <>
    <SearchBar>
        <Button onClick={onClick} text="+" dimension="medium"/>
    </SearchBar>
    <Invoices>
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
    </Invoices>
    </>
  )
}

export default InvoiceList