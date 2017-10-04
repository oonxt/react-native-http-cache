/**
 * Created by tdzl2_000 on 2015-12-29.
 */
import { NativeModules } from 'react-native';
const {HttpCache} = NativeModules;

export const clearHttpCache = HttpCache.clearCache;

export const getHttpCacheSize = HttpCache.getHttpCacheSize;

export const clearImageCache = HttpCache.clearImageCache;

export const getImageCacheSize = HttpCache.getImageCacheSize;

export async function getCacheSize(){
  const arr = await Promise.all([getHttpCacheSize(), getImageCacheSize()]);

  console.log(arr.join(','));
  // Get sum of all cache type.
  return arr.reduce((a,b)=>a+b, 0);
}

export async function clearCache(){
  await Promise.all([clearHttpCache(), clearImageCache()]);
}
