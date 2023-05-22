import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

const languages = ['en', 'ca', 'es']

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: withDocumentI18nPlugin(
    [
      deskTool(),
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
    ],
    {
      languages
    },
  ),
})
