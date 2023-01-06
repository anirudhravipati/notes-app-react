
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsParagraph,
  BsListUl,
  BsListOl,
  BsCodeSlash,
  BsCodeSquare,
  BsBlockquoteLeft,
  BsDashLg,
  BsTypeItalic,
  BsTypeBold,
  BsTypeStrikethrough } from "react-icons/bs"
import {
  ImClearFormatting,
  ImPageBreak } from "react-icons/im"
import {FaRemoveFormat} from "react-icons/fa"
import {BiUndo,BiRedo} from "react-icons/bi"

import React, { useEffect } from 'react'

import './EditorPane.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    console.log('Null Editor!!')
    return null
  }
  
  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <BsTypeBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <BsTypeItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <BsTypeStrikethrough/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <BsCodeSlash/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <BsCodeSquare/>
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <ImClearFormatting/>
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        <FaRemoveFormat/>
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <BsParagraph/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <BsTypeH1/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <BsTypeH2/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <BsTypeH3/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <BsListUl/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <BsListOl/>
      </button>
      
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <BsBlockquoteLeft/>
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <BsDashLg/>
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <ImPageBreak/>
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <BiUndo/>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <BiRedo/>
      </button>
    </div>
  )
}

export default function EditorPane(props) {
  const [html,setHtml] = React.useState(props.note? props.note.body : {})
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `<p>hello world!</p>`,
    editorProps: {
      attributes: {
        class: 'editor',
      },
    },
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML()
      // console.log(`onUpdate is ${newContent}`)
      setHtml(newContent)
    } ,
  })  

  useEffect(()=> {
    props.updateContent(html)
  },[html]);

  useEffect(()=> {
    if(editor && props.note)
    {
      // console.log(`body is ${props.note.body}`)
      editor.commands.setContent(props.note.body)
    }
  },[editor,props.currentId]);

  return (
    <div className="editor-wrapper">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}