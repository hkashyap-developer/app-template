import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from "@sanity/vision";
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'App Template Sanity',

  projectId: '4ozwfyi6',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
