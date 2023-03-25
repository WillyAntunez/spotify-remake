import { useRef, useState } from "react";

export const useInput = (  ) => {
    
    const [inputText, setInputText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    
      const onInputChange = ({target}:React.ChangeEvent<HTMLInputElement>):void => {
          setInputText(target.value);
      }
      
    const focusInput = ():void => {
      inputRef.current?.focus();
    }

    const clearInput = ():void => {
        setInputText('');
    }

    return {
        inputText,
        onInputChange,
        focusInput,
        clearInput,
        inputRef,
    }
}