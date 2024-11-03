export type TOptsForm = {
  title: string;
  genre: string;
  format: string;
  unf: number;
  country: string;
  price: string;
  synopsis: string;
};

export type TFieldsName = 'title' | 'genre' | 'format' | 'unf' | 'country' | 'price' | 'synopsis';

export type TFieldData = {
  name: TFieldsName;
  label: string;
  placeholder: string;
  type: 'text';
};
