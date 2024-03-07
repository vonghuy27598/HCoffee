export interface IStoreBannerType {
  dataBanner: IBannerType[];
  arrayImage: string[];
  isLoadingBanner: boolean;
}
export interface IBannerType {
  BannerId: number;
  BannerName: string;
  DetailBanner: string;
  ImageBanner: string;
}
