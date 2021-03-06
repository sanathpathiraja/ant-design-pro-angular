// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
export function urlToList(url: string): string[] {
  if (url === '/') {
    return ['/'];
  }
  const urlList = url.split('/').filter(i => i);
  return urlList.map(
    (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`,
  );
}
