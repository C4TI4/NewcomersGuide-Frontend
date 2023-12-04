import {Select, SelectItem} from "@nextui-org/react";

const LangDropdown = ({originLn = false, languageSelection, setLanguageSelection, languages }) => {

  const handleSelectionChange = (e) => {
    const newLanguage = languages.find(language => language.language === e.target.value)

    setLanguageSelection(prev => {
      // Work on improving swapping languages when two equal languages are selected in both dropdowns
      // if (originLn && newLanguage === prev.targetLn.name) return {
      //   originLn: prev.targetLn,
      //   targetLn: prev.originLn,
      // }
      
      // if (!originLn && newLanguage === prev.originLn.name) return {
      //   originLn: prev.targetLn,
      //   targetLn: prev.originLn,
      // }

      return originLn ? {...prev, originLn: {code: newLanguage.language, name: newLanguage.name}} : {...prev, targetLn: {code: newLanguage.language, name: newLanguage.name}}
    });
  };

	return (
    <Select selectedKeys={[originLn ? languageSelection.originLn.code : languageSelection.targetLn.code]} onChange={handleSelectionChange} className="max-w-[18ch] md:max-w-[25ch]">
      {languages.map((language) => (
        <SelectItem  key={language.language} value={language.language}>
          {language.name}
        </SelectItem>
      ))}
    </Select>     
  );
}

export default LangDropdown