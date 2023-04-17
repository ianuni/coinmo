import React from 'react'
import Invoices, {Invoice} from '../../components/Invoices';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function InvoiceList() {
    const {currentUserInvoices, currentUserToken} = useAuth();
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
      {
      currentUserInvoices.map((invoice) => (
        currentUserToken.uid == invoice.buyerId ? 
        <Invoice key={invoice.id} type="buy" companyName={invoice.sellerInfo.name} companyCategory={invoice.sellerInfo.category} total={"-" + invoice.total}/> : 
        <Invoice key={invoice.id} type="sell" companyName={invoice.buyerInfo.name} companyCategory={invoice.buyerInfo.category} total={"+" + invoice.total}/>))
      }
    </Invoices>
    </>
  )
}

export default InvoiceList