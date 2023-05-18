export type RouteItem = {
  [key: string]: string | RouteItem;
  path: string;
  description: string;
};

export type Routes = {
  [key: string]: RouteItem | string;
};

const setNestedPathProxy = {
  get(target: RouteItem, prop: string): any {
    const value = target[prop];
    if (typeof value === 'object' && value !== null) {
      const parentPath = target.path ? target?.path : '';
      return new Proxy({ ...value, path: `${parentPath}${value.path}` }, setNestedPathProxy);
    }
    return target[prop];
  },
};

const routers = {
  INDEX: {
    path: '/',
    description: 'Main Page',
  },
  LOGIN: {
    path: '/login',
    description: 'Login Page',
  },
  SETTING: {
    path: '/settings',
    description: 'setting Page',
    SITES: {
      path: '/sites',
      description: 'sites Page',
    },
  },
};
// @ts-ignore FIXME:
const ROUTES = new Proxy(routers, setNestedPathProxy);

export default ROUTES;
