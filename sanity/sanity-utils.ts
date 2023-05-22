import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

type GeneralContent = {
  title: string;
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
});

const IMAGES_BASE_URL = `https://cdn.sanity.io/images/${projectId}/${dataset}`;
const FILES_BASE_URL = `https://cdn.sanity.io/files/${projectId}/${dataset}`;

const getPage = async (page: string, language: string = 'en') => {
  const content = await client.fetch(`*[_type == "${page}" && __i18n_lang == "${language}"]`);
  return content[0];
};

const fetchLanguages = async () => {
  const languages = await client.fetch(`*[_type == "language"]`);
  return (languages || []).map((lang: { name: string; code: string; }) => ({ title: lang.name, name: lang.code, type: "string" }));
};

const getImageUrl = (img: any) => {
  if (!img) return;
  const imagePathSplitted = img.asset._ref.split('-');
  const imgName = imagePathSplitted.slice(1, -1).join('-').concat(`.${imagePathSplitted.slice(-1)}`);
  return `${IMAGES_BASE_URL}/${imgName}`;
};

const getFileUrl = (file: any) => {
  if (!file) return;
  const imagePathSplitted = file.asset._ref.split('-');
  const imgName = imagePathSplitted.slice(1, -1).join('-').concat(`.${imagePathSplitted.slice(-1)}`);
  return `${FILES_BASE_URL}/${imgName}`;
};

export {
  fetchLanguages,
  getFileUrl,
  getImageUrl,
  getPage,
};
