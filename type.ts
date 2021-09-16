export interface ISpaceX {
  [x: string]: any;
  __typename: string;
  id: string;
  launch_date_local: string;
  launch_site: ILaunchSite;
  links: ILinks;
  mission_name: string;
  rocket: IRocket;
}
export interface ILaunchSite {
  __typename: string;
  site_name_long: string;
}
export interface ILinks {
  __typename: string;
  article_link?: null;
  mission_patch: string;
  video_link: string;
}
export interface IRocket {
  __typename: string;
  rocket_name: string;
}
