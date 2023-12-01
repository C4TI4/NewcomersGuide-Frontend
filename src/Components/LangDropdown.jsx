import {Select, SelectItem} from "@nextui-org/react";

const LangDropdown = ({languages}) => {
 return (
           <Select defaultSelectedKeys={['EN']} className="max-w-xs">
         {languages.map((language) => (
           <SelectItem  key={language.language} value={language.language}>
             {language.name}
           </SelectItem>
         ))}
        </Select>     
     );
}


export default LangDropdown