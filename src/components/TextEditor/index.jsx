"use client";
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from "@tiptap/extension-Highlight";
import Image from "@tiptap/extension-Image";
import BulletList from "@tiptap/extension-bullet-list";
import OrderList from "@tiptap/extension-ordered-list";
import ToolBar from './ToolBar';

function TextEditor() {
  return (
    <div>
      <ToolBar></ToolBar>
      <EditorContent></EditorContent>
    </div>
  )
}

export default TextEditor;
