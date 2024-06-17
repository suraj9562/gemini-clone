import { createContext, useContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setShowResult(true);
    setLoading(true);

    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    let respArray = response.split("**");
    let filteredResponse = "";

    for (let i = 0; i < respArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        filteredResponse += respArray[i];
      } else {
        filteredResponse += "<b>" + respArray[i] + "</b>";
      }
    }
    let filteredResponse1 = filteredResponse.split("*").join("</br>");

    let finalResponse = filteredResponse1.split(" ");
    for (let index = 0; index < finalResponse.length; index++) {
      const nextWord = finalResponse[index];
      delayPara(index, nextWord + " ");
    }

    setResultData(filteredResponse1);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
    loadPrompt,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
