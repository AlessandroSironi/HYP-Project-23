type Project =
    | {
          id: number;
          name: string;
          year: number;
          founderName: string;
          founderSurname: string;
          description: string;
          review: string;
          companyLogo: string;
          companyImage: string;
          mostRelevant: boolean;
          supervisor: number;
      }
    | undefined;