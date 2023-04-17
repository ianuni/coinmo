import React from 'react'
import Navigation, { NavItem } from "../../components/Navigation"
import {ReactComponent as Invoices} from "../../assets/invoices.svg"
import {ReactComponent as Inbox} from "../../assets/inbox.svg"
import {ReactComponent as Statistics} from "../../assets/statistics.svg"
import {ReactComponent as Profile} from "../../assets/profile.svg"
import {ReactComponent as Contacts} from "../../assets/contacts.svg"

function Home() {

  return (
    <Navigation>
      <NavItem tag="Invoices" to="/home/invoices" icon={<Invoices/>}/>
      <NavItem tag="Inbox" to="/home/inbox" icon={<Inbox/>}/>
      <NavItem tag="Statistics" to="/home/statistics" icon={<Statistics/>}/>
      <NavItem tag="Profile" to="/home/contacts" icon={<Contacts/>}/>
      <NavItem tag="Profile" to="/home/profile" icon={<Profile/>}/>
    </Navigation>
  )
}

export default Home;