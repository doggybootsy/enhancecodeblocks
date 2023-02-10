import React, { memo } from "react";
import hljs, { Language } from "highlight.js";

const SearchPopout = BdApi.Webpack.getModule(m => m.toString?.().includes(".Messages.AUTOCOMPLETE_NO_RESULTS_HEADER"), { searchExports: true });
const SearchItem = BdApi.Webpack.getModule((e, m) => e.Checkbox && e.Checkmark, { searchExports: true });

const LANGUAGES = hljs.listLanguages().map(name => {
  const lang = hljs.getLanguage(name) as Language;

  return {
    lang: lang,
    value: name,
    aliases: lang.aliases ? lang.aliases.concat(name) : [ name ]
  }
});

const { languageSelector } = BdApi.Webpack.getModule(m => m.languageSelector);

function getContent(searchValue: string) {
  return LANGUAGES.map(({ value, aliases, lang }) => ({
    component: (
      <SearchItem key={value} value={value}>
        <SearchItem.Label>{lang.name}</SearchItem.Label>
      </SearchItem>
    ),
    aliases
  })).filter(({ aliases }) => aliases.find(alias => alias.toLowerCase().includes(searchValue.toLocaleLowerCase()))).map(({ component }) => component);
}

function ChangeLang({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return (
    <SearchPopout
      autoFocus={true}
      className={languageSelector}
      multiSelect={false}
      onChange={onChange}
      placeholder="Search languages"
      value={new Set([ value.toLowerCase() ])}
    >{getContent}</SearchPopout>
  )
};

export default memo(ChangeLang);