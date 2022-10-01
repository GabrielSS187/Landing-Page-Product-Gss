import { useState, useEffect} from "react"

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from "./styles";

import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib"
import { Button } from "../../common/Button/styles";
import { useLocation  } from "react-router-dom";


export const Navbar = () => {
    const { pathname } = useLocation();
    console.log(pathname)

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [servicesClick, setServicesClick] = useState(false);
    const [productsClick, setProductsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setProductsClick(false);
        setServicesClick(false);
    };
    const handleServicesClick = () => {
        setHomeClick(false);
        setProductsClick(false);
        setServicesClick(true);
    };
    const handleProductsClick = () => {
        setHomeClick(false);
        setProductsClick(true);
        setServicesClick(false);
    };

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" > 
                        <NavIcon />
                            ULTRA
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to="/" 
                                className={ pathname === "/" ? "active" : "normal" }
                                onClick={closeMobileMenu}
                            >
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleServicesClick} servicesClick={servicesClick}>
                            <NavLinks to="/services"
                               className={ pathname === "/services" ? "active" : "normal" }
                                onClick={closeMobileMenu}
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleProductsClick} productsClick={productsClick}>
                            <NavLinks to="/Products" 
                                className={ pathname === "/Products" ? "active" : "normal" }
                                onClick={closeMobileMenu
                            }>
                                Products
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}
