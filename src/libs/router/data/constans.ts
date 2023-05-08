export type RouteItem = {
  [key: string]: string | RouteItem;
  path: string;
  description: string;
};

export type Routes = {
  [key: string]: RouteItem | string;
};

const routers = {
  INDEX: {
    path: '/',
    description: 'indexPage',
  },
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

const ROUTES = new Proxy(routers, setNestedPathProxy);

export default ROUTES;