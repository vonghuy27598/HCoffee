export interface IListCategoryMenu {
  data: ICategoryMenu[];
  isLoading: boolean;
}

export interface ICategoryMenu {
  cateMenuId: number;
  cateMenuName: string;
  detailCate: string;
  imageCate: string;
}
