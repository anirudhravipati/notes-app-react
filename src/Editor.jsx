import React from "react"
import Showdown from "showdown"
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function Editor( ) {
  
  
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  })  

  const [value, setValue] = React.useState("Initial value");

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  return <SimpleMdeReact value={value} onChange={onChange} />;

  
  // return (
  //     <SimpleMDE />
  //   )
  }
  