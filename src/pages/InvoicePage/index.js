import React from 'react'
import Invoices, {Invoice} from '../../components/Invoices';
import SearchBar from '../../components/SearchBar';

const InvoicePage = () => {

  return (
    <>
    <SearchBar/>
    <Invoices>
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
      <Invoice />
    </Invoices>
    </>
  );
}

export default InvoicePage;