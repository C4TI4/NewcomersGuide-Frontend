import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Switch,
} from "@nextui-org/react";
import { SearchIcon } from "../assets/Images/SearchIcon.jsx";
import { MoonIcon } from '../assets/Images/MoonIcon'; 
import { SunIcon } from '../assets/Images/SunIcon';
import useThemeContext from '../context/ThemeContext';
import {useNavigate} from 'react-router-dom'
import useAuthContext from '../context/AuthContext.jsx'

export default function NavBar({ searchQuery, setSearchQuery }) {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState(searchQuery)
  const {isDarkMode, toggleDarkMode} = useThemeContext() 
  const {isAuth, user} = useAuthContext()

  const menuItems = [
    "Profile",
    "Dashboard",
    "Unwritten",
    "Doc Translation",
    "Legal Aid",
    "Language Courses",
    "Public Transport",
    "Help",
    "Feedback",
    "Log Out",
  ];

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      setSearchQuery(inputText)
      navigate(`/search?query=${inputText}`)
    } catch (error) {
      console.error(error)
    }
  }




  const handleLoginClick = () => {
    navigate('/login');
  };


  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
      {/* NavbarContent and NavbarBrand */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarItem>
          <Link href="/">
            <p className="font-bold text-danger">Newcomer`s guide</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-danger" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="flex font-bold hover:cursor-pointer text-danger">Newcomer`s Guide</p>
          </Link>
        </NavbarBrand>


        {/* NavbarItems */}
      
        <NavbarItem>
        <Dropdown>
          <DropdownTrigger className="text-foreground">
            
              Unwritten Rules
            
          </DropdownTrigger>
          <DropdownMenu>
            {/* Dropdown Items */}

            <DropdownItem>
              <Link color="foreground" href="article/65704f5a36edba074555456b">
                Clothing & Style
              </Link>
            </DropdownItem>


            <DropdownItem>
              <Link color="foreground" href="article/657052f636edba074555458f">
              Recycling 
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="article/6568c7df64e3599d10df81b4">
                Post Service & Laws
              </Link>
            </DropdownItem>

          
            <DropdownItem>
              <Link color="foreground" href="article/6568c7df64e3599d10df81b0">
                At The Supermarket
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="article/6568c7df64e3599d10df81b1">
                Language & Slang
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>



      </NavbarItem>
        <NavbarItem >
          <Link href="/article" color="foreground">
            First Steps
          </Link>
        </NavbarItem>

        {/*  Interactive map - link to Map page*/}
        
        <NavbarItem  className="hover:border-solid-black-500">
          <Link color="foreground" href="/InteractiveMap">
            Map
          </Link>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent as="div" className="items-center" justify="end">
        
        {/* Search Input */}
        <form onSubmit={handleSearch}>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/0 dark:bg-default-500/0",
            }}
            label=""
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            value={inputText}
            onValueChange={setInputText}
            />
        </form>
        {/* Profile Dropdown */}

        <Dropdown placement="bottom-end">
          <DropdownTrigger className="hidden sm:block">
            <Avatar
              isBordered
              as="button"
              className="transition-transform sm:hidden"
              color="danger"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" theme={isDarkMode ? 'dark-mode' : 'light-mode'}>

            {/* Dropdown Menu Items */}
            <DropdownItem key="profile" className="h-14 gap-2">
              {isAuth ? (
          <>
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user ? user.userName : null}</p>
          </>
        ) : (
          <Link to={'/login'} onClick={handleLoginClick}>Login</Link>
        )}
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>


        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle">
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </div>
      </NavbarContent>

      {/* NavbarMenu */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0
                  ? "foreground"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
  