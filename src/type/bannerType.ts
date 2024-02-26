export interface IListBannerType {
  data: IBannerType[];
  arrayImage: string[];
  isLoading: boolean;
}
export interface IBannerType {
  BannerId: number;
  BannerName: string;
  DetailBanner: string;
  ImageBanner: string;
}
