export interface IStoreCategoryMenu {
  dataMenu: ICategoryMenu[];
  isLoadingMenu: boolean;
}

export interface ICategoryMenu {
  cateMenuId: number;
  cateMenuName: string;
  detailCate: string;
  imageCate: string;
}
