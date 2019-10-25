import {http} from '@/utils/http';

// 地图块矩形查找
export const queryRect = (params: any) => {
  return http.post(`mapeditor/block/queryrect`, params);
};
// 地图块新建
export const newBlock = (params: any) => {
  return http.post(`mapeditor/block/new`, params);
};
// 地图块删除
export const deleteBlock = (params: any) => {
  return http.post(`mapeditor/block/delete`, params);
};
// 地图块更新
export const updateBlock = (params: any) => {
  return http.post(`mapeditor/block/update`, params);
};
// 地图块查找
export const queryBlock = (params: any) => {
  return http.post(`mapeditor/block/query`, params);
};
