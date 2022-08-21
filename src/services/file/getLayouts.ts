import { normalize } from 'path';
import glob from '../../helpers/glob';
import { LayoutProperties } from './types';

const CWD = process.cwd();
const PATTERN = 'layouts/**/*.js';

type Paths = string[];

export const getLayoutPaths = async (): Promise<Paths> => glob(PATTERN);

export const getLayoutTemplates = async (paths: Paths): Promise<Promise<LayoutProperties>[]> => paths
  .map(async (path): Promise<LayoutProperties> => {
    const filename = path.split('/').pop() as string;

    return {
      name: filename.split('.')[0],
      ...await import(normalize(`${CWD}/${path}`)),
    };
  });

export const getLayouts = async (): Promise<LayoutProperties[]> => {
  const paths = await getLayoutPaths();
  const templates = await getLayoutTemplates(paths);

  return Promise.all(templates);
};

export default getLayouts;
