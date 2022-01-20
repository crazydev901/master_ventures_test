type Item = {
  title: string;
  photoUrL: string;
  id: string;
};

type Group = {
  id: string;
  title: string;
  items: Item[];
};

type ApiBallotsResponse = {
  items: Group[];
};
