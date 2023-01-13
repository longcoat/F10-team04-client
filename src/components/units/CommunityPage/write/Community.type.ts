export interface IUpdateUseditemInput {
    title: string;
    content: string;
    recruitSports: string;
    recruitGrade: string;
    recruitRegion: string;
    image:{
        imgUrl: string;
    }
    recruitPeople: number;
    location: {
        path:string;
        center:string;
      },
  }
  