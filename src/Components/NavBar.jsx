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

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isDarkMode, toggleDarkMode} = useThemeContext()

  const menuItems = [
    "Profile",
    "Dashboard",
    "Unwritten Rules",
    "Doc Translation",
    "Legal Aid",
    "Language Courses",
    "Public Transport",
    "Help",
    "Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
      {/* NavbarContent and NavbarBrand */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          
          <p className="font-bold text-inherit">Newcomer`s guide</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          
          <p className="flex font-bold text-inherit">Newcomer`s Guide</p>
        </NavbarBrand>


        {/* NavbarItems */}
      
        <NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Link
              color="foreground"
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Unwritten Rules
            </Link>
          </DropdownTrigger>
          <DropdownMenu>
            {/* Dropdown Items */}

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                Clothing & Style
              </Link>
            </DropdownItem>


            <DropdownItem>
              <Link color="foreground" href="/articles-page">
              Recycling 
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                Post Service & Laws
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                Public Transport
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                Clubs & Q`s
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                At The Supermarket
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                On the Streets
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link color="foreground" href="/articles-page">
                Language & Slang
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>


      </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            First Steps
          </Link>
        </NavbarItem>

        {/*  Interactive map - link to Map page*/}
        <NavbarItem  className="hover:border-solid-black-500">
          <Link color="foreground" href="#">
            Interactive Map
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        
        {/* Search Input */}
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
        />
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
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">UserName</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>

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
                index === 2
                  ? "warning"
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
  