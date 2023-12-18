import { defineConfig } from 'dumi';
import path from 'path';
//github仓库名称
const defaultPath = '/will-design/';
export default defineConfig({
  themeConfig: {},
  alias: {
    'antd/es': path.join(__dirname, 'components'),
    antd: path.join(__dirname, 'components'),
  },
  base: defaultPath,
  publicPath: defaultPath,
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
});
