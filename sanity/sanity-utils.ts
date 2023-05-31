import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

type GeneralContent = {
  title: string;
}

interface Asset {
  _ref: string;
  _type: string;
}

interface Image {
  _type: string;
  asset: Asset;
}

interface File {
  _type: string;
  asset: Asset;
}


const client = createClient({
  projectId,
  dataset,
  apiVersion,
});

const IMAGES_BASE_URL = `https://cdn.sanity.io/images/${projectId}/${dataset}`;
const FILES_BASE_URL = `https://cdn.sanity.io/files/${projectId}/${dataset}`;

const getPage = async (page: string, language: string = 'en') => {
  const content = await client.fetch(`*[_type == "${page}" && __i18n_lang == "${language}"]`, { next: { revalidate: 60 } });
  return content[0];
};

const fetchLanguages = async () => {
  const languages = await client.fetch(`*[_type == "language"]`, { next: { revalidate: 60 } });
  return (languages || []).map((lang: { name: string; code: string; }) => ({ title: lang.name, name: lang.code, type: "string" }));
};

const getImageUrl = (img: Image | undefined) => {
  if (!img) return;
  const imagePathSplitted = img.asset._ref.split('-');
  const imgName = imagePathSplitted.slice(1, -1).join('-').concat(`.${imagePathSplitted.slice(-1)}`);
  return `${IMAGES_BASE_URL}/${imgName}`;
};

const getFileUrl = (file: File | undefined) => {
  if (!file) return;
  const filePathSplitted = file.asset._ref.split('-');
  const fileName = filePathSplitted.slice(1, -1).join('-').concat(`.${filePathSplitted.slice(-1)}`);
  return `${FILES_BASE_URL}/${fileName}`;
};

export {
  fetchLanguages,
  getFileUrl,
  getImageUrl,
  getPage,
};
