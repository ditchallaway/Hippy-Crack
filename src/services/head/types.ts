import { Config } from '../file/types';

interface HeadArgs {
  dev: boolean;
  data: object;
  config: Config;
  route?: object;
}

export type HeadTag = [string, { [x: string]: string | boolean }, string|null|boolean];

export type Head = (arg: HeadArgs) => Promise<HeadTag[]>;
