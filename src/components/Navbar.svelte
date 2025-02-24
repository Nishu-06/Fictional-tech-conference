<script>
  import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "sveltestrap";
</script>

<Navbar color="dark" dark expand="md">
  <NavbarBrand href="/">Tech Conference</NavbarBrand>
  <Nav class="ms-auto" navbar>
    <NavItem><NavLink href="/">Home</NavLink></NavItem>
    <NavItem><NavLink href="/speakers">Speakers</NavLink></NavItem>
    <NavItem><NavLink href="/schedule">Schedule</NavLink></NavItem>
    <NavItem><NavLink href="/sponsors">Sponsors</NavLink></NavItem>
    <NavItem><NavLink href="/about">About</NavLink></NavItem>
    <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
    
  </Nav>
</Navbar>
