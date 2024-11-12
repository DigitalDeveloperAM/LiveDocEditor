"use client";
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import BulletList from "@tiptap/extension-bullet-list";
import OrderList from "@tiptap/extension-ordered-list";
import ToolBar from './ToolBar';

function TextEditor({content, onChange}) {
 const editor = useEditor({
    extensions: [
        StarterKit.configure(),
        TextAlign.configure({
            types: ["heading", "paragraph"],
        }),
        Heading.configure({
            levels: [1, 2, 3],
        }),
        OrderList.configure({
            HTMLAttributes: {
                class: "list-decimal ml-3",
            }
        }),
        BulletList.configure({
            HTMLAttributes: {
                class: "list-disc ml-3",
            },
        }),
        Highlight,
        Image,
    ],
    content,
    onUpdate: ({editor}) => {
        console.log(editor.getHTML());
        onChange(editor.getHTML());
    },
    editorProps: {
        attributes:{
            class:"min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
        }
    }
 })

  return (
    <div>
      <ToolBar editor={editor}></ToolBar>
      <EditorContent editor={editor}></EditorContent>
    </div>
  )
}

export default TextEditor;
