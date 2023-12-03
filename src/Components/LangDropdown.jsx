import {Select, SelectItem} from "@nextui-org/react";

const LangDropdown = ({languageSelection, setLanguageSelection, languages}) => {
  const handleSelectionChange = (e) => {
    const newTargetLn = languages.find(language => language.language === e.target.value)
    setLanguageSelection(prev => ({...prev, targetLn: {code: newTargetLn.language, name: newTargetLn.name}}));
  };
	return (
    <Select selectedKeys={[languageSelection.targetLn.code]} onChange={handleSelectionChange} className="max-w-min">
      {languages.map((language) => (
        <SelectItem  key={language.language} value={language.language}>
          {language.name}
        </SelectItem>
      ))}
    </Select>     
  );
}

export default LangDropdown