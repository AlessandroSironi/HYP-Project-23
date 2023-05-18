// Employee type
// TODO: fix it with other data from the DB

type Employee =
    | {
          id: number;
          name: string;
          surname: string;
          role: string;
          pic: string;
      }
    | undefined;
