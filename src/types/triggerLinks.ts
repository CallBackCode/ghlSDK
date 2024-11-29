export type LinksSchema = {
  id?: string /** The unique identifier of the link. */;
  name?: string /** The name of the link. */;
  redirectTo?: string /** The URL to redirect to when the link is clicked. */;
  fieldKey?: string /** The key of the field that the link is associated with. */;
  locationId?: string /** The unique identifier of the location that the link is associated with. */;
};

export type LinksSearchResponseDTO = {
  links: LinksSchema[] /** The list of links. */;
};

export type LinksGetResponseDTO = {
  link: LinksSchema /** The link. */;
};

export type LinksDTO = {
  locationId: string /** The unique identifier of the location that the link is associated with. */;
  name: string /** The name of the link. */;
  redirectTo: string /** The URL to redirect to when the link is clicked. */;
};

export type LinksUpdateDTO = {
  name: string /** The name of the link. */;
  redirectTo: string /** The URL to redirect to when the link is clicked. */;
};
