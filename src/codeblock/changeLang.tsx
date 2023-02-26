import React, { memo } from "react";
import hljs, { Language } from "highlight.js";
import { useMessages } from "../hooks";

const SearchPopout = BdApi.Webpack.getModule(m => m.toString?.().includes(".Messages.AUTOCOMPLETE_NO_RESULTS_HEADER"), { searchExports: true }) as React.ComponentClass<{
  autoFocus: true,
  className: string,
  multiSelect: boolean,
  onChange: (newValue: string) => void,
  placeholder: string,
  value: Set<string>,
  children: (searchValue: string) => JSX.Element[]
}>;
const SearchItem = BdApi.Webpack.getModule(m => m.Checkbox && m.Checkmark, { searchExports: true }) as React.ComponentClass<{
  value: string,
  children: React.ReactNode
}> & { Label: React.ComponentClass<{ children: React.ReactNode }> };
const { languageSelector } = BdApi.Webpack.getModule(m => m.languageSelector) as { languageSelector: string };

const LANGUAGES = hljs.listLanguages().map(name => {
  const lang = hljs.getLanguage(name) as Language;

  return {
    lang: lang,
    value: name,
    aliases: lang.aliases ? lang.aliases.concat(name) : [ name ]
  }
});

function getContent(searchValue: string) {
  return LANGUAGES.map(({ value, aliases, lang }) => ({
    component: (
      <SearchItem key={value} value={value}>
        <SearchItem.Label>{lang.name}</SearchItem.Label>
      </SearchItem>
    ),
    aliases
  })).filter(({ aliases }) => aliases.find(alias => alias.toLowerCase().includes(searchValue.toLocaleLowerCase()))).map(({ component }) => component);
};

function ChangeLang({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  const messages = useMessages();

  return (
    <SearchPopout
      autoFocus={true}
      className={languageSelector}
      multiSelect={false}
      onChange={onChange}
      placeholder={messages.SEARCH_LANGUAGES}
      value={new Set([ value.toLowerCase() ])}
    >{getContent}</SearchPopout>
  )
};

export default memo(ChangeLang);