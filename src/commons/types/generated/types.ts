export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAttendList = {
  __typename?: 'AttendList';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  reviewBoard: Array<IReviewBoard>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IBoard = {
  __typename?: 'Board';
  appointment: Scalars['String'];
  attendCount: Scalars['Int'];
  attendList: Array<IAttendList>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  image?: Maybe<IImage>;
  location?: Maybe<ILocation>;
  pick: Array<IPick>;
  pickCount: Scalars['Int'];
  recruitGrade: Scalars['String'];
  recruitPeople: Scalars['Int'];
  recruitRegion: Scalars['String'];
  recruitSports: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IChatHistory = {
  __typename?: 'ChatHistory';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  user: Scalars['String'];
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateBoardInput = {
  appointment: Scalars['String'];
  content: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  location: ILocationInput;
  recruitGrade: Scalars['String'];
  recruitPeople: Scalars['Int'];
  recruitRegion: Scalars['String'];
  recruitSports: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateReviewBoardInput = {
  content: Scalars['String'];
  reviewImage: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ICreateUserInput = {
  age: Scalars['String'];
  cpassword: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  grade: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  nickname: Scalars['String'];
  password: Scalars['String'];
  prefer: Scalars['String'];
  region: Scalars['String'];
};

export type IFollowCount = {
  __typename?: 'FollowCount';
  followCount: Scalars['Int'];
  followerCount: Scalars['Int'];
  id: Scalars['String'];
  user: IUser;
};

export type IFollowerList = {
  __typename?: 'FollowerList';
  id: Scalars['String'];
  user2: IUser;
};

export type IFollowingList = {
  __typename?: 'FollowingList';
  id: Scalars['String'];
  user2: IUser;
};

export type IImage = {
  __typename?: 'Image';
  board: IBoard;
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  user: IUser;
};

export type ILike = {
  __typename?: 'Like';
  id: Scalars['String'];
  reviewBoard: IReviewBoard;
  user: IUser;
};

export type ILocation = {
  __typename?: 'Location';
  center: Scalars['String'];
  id: Scalars['String'];
  path: Scalars['String'];
};

export type ILocationInput = {
  center: Scalars['String'];
  path: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  attendList: Scalars['String'];
  checkNickName: Scalars['String'];
  checkTokenEmail: Scalars['String'];
  createBoard: IBoard;
  createComment: IComment;
  createNestedComment: INestedComment;
  createReviewBoard: IReviewBoard;
  createReviewComment: IReviewComment;
  createReviewNestedComment: IReviewNestedComment;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteNestedComment: Scalars['Boolean'];
  deleteReviewBoard: Scalars['Boolean'];
  deleteReviewBoardImage: Scalars['Boolean'];
  deleteReviewComment: Scalars['Boolean'];
  deleteReviewNestedComment: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  findUserPassword: Scalars['String'];
  followUser: Scalars['String'];
  likeReviewBoard: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  pickBoard: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  sendTokenToEmail: Scalars['String'];
  updateBoard: IBoard;
  updateComment: IComment;
  updateNestedComment: INestedComment;
  updatePassword: Scalars['String'];
  updateReviewBoard: IReviewBoard;
  updateReviewComment: IReviewComment;
  updateReviewNestedComment: IReviewNestedComment;
  updateUser: IUser;
  uploadFile: Scalars['String'];
  uploadFiles: Array<Scalars['String']>;
};


export type IMutationAttendListArgs = {
  boardId: Scalars['String'];
};


export type IMutationCheckNickNameArgs = {
  nickname: Scalars['String'];
};


export type IMutationCheckTokenEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCommentArgs = {
  boardId: Scalars['String'];
  comment: Scalars['String'];
};


export type IMutationCreateNestedCommentArgs = {
  commentId: Scalars['String'];
  nestedComment: Scalars['String'];
};


export type IMutationCreateReviewBoardArgs = {
  attendListId: Scalars['String'];
  createReviewBoardInput: ICreateReviewBoardInput;
};


export type IMutationCreateReviewCommentArgs = {
  reviewBoardId: Scalars['String'];
  reviewComment: Scalars['String'];
};


export type IMutationCreateReviewNestedCommentArgs = {
  reviewCommentId: Scalars['String'];
  reviewNestedComment: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteNestedCommentArgs = {
  nestedCommentId: Scalars['String'];
};


export type IMutationDeleteReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IMutationDeleteReviewBoardImageArgs = {
  reviewBoardId: Scalars['String'];
  reviewImageId: Scalars['String'];
};


export type IMutationDeleteReviewCommentArgs = {
  reviewCommentId: Scalars['String'];
};


export type IMutationDeleteReviewNestedCommentArgs = {
  reviewNestedCommentId: Scalars['String'];
};


export type IMutationFindUserPasswordArgs = {
  email: Scalars['String'];
};


export type IMutationFollowUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLikeReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationPickBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationSendTokenToEmailArgs = {
  email: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  updateComment: Scalars['String'];
};


export type IMutationUpdateNestedCommentArgs = {
  nestedCommentId: Scalars['String'];
  updateNestedComment: Scalars['String'];
};


export type IMutationUpdatePasswordArgs = {
  password: Scalars['String'];
  rePassword: Scalars['String'];
};


export type IMutationUpdateReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
  updateReviewBoardInput: IUpdateReviewBoardInput;
};


export type IMutationUpdateReviewCommentArgs = {
  reviewCommentId: Scalars['String'];
  updateReviewComment: Scalars['String'];
};


export type IMutationUpdateReviewNestedCommentArgs = {
  reviewNestedCommentId: Scalars['String'];
  updateReviewNestedComment: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
};

export type INestedComment = {
  __typename?: 'NestedComment';
  comment: IComment;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  nestedComment: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IPick = {
  __typename?: 'Pick';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllBoards: Array<IBoard>;
  fetchAllBoardsWithDelete: Array<IBoard>;
  fetchAllBoardsWithPickCount: Array<IBoard>;
  fetchAllReviewBoardImages: Array<IReviewImage>;
  fetchAllReviewBoards: Array<IReviewBoard>;
  fetchAttendList: Array<IAttendList>;
  fetchBoard: IBoard;
  fetchChatHistory: Array<IChatHistory>;
  fetchComments: Array<IComment>;
  fetchFollowCount: IFollowCount;
  fetchFollower: Array<IFollowerList>;
  fetchFollowing: Array<IFollowingList>;
  fetchMyAllBoards: Array<IBoard>;
  fetchMyBoard: IBoard;
  fetchMyFollowCount: IFollowCount;
  fetchMyPickBoards: Array<IPick>;
  fetchNestedComments: Array<INestedComment>;
  fetchReviewBoard: IReviewBoard;
  fetchReviewBoardImage: Array<IReviewImage>;
  fetchReviewComments: Array<IReviewComment>;
  fetchReviewNestedComments: Array<IReviewNestedComment>;
  fetchUser: IUser;
  fetchUserLoggedIn: IUser;
  fetchUsers: Array<IUser>;
  searchBoards: Array<IBoard>;
};


export type IQueryFetchAllBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchAllBoardsWithPickCountArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchAllReviewBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchAttendListArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchChatHistoryArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchFollowCountArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchFollowerArgs = {
  page?: Scalars['Int'];
  userId: Scalars['String'];
};


export type IQueryFetchFollowingArgs = {
  page?: Scalars['Int'];
  userId: Scalars['String'];
};


export type IQueryFetchMyAllBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchMyBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchMyPickBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchNestedCommentsArgs = {
  commentId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchReviewBoardArgs = {
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewBoardImageArgs = {
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  reviewBoardId: Scalars['String'];
};


export type IQueryFetchReviewNestedCommentsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  reviewCommentId: Scalars['String'];
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUsersArgs = {
  page?: Scalars['Int'];
};


export type IQuerySearchBoardsArgs = {
  word: Scalars['String'];
};

export type IReviewBoard = {
  __typename?: 'ReviewBoard';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  like: Array<ILike>;
  likeCount: Scalars['Int'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IReviewComment = {
  __typename?: 'ReviewComment';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  reviewBoard: IReviewBoard;
  reviewComment: Scalars['String'];
  user: IUser;
};

export type IReviewImage = {
  __typename?: 'ReviewImage';
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  isMain: Scalars['Boolean'];
  reviewBoard: IReviewBoard;
};

export type IReviewNestedComment = {
  __typename?: 'ReviewNestedComment';
  createAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  reviewComment: IReviewComment;
  reviewNestedComment: Scalars['String'];
  user: IUser;
};

export type IUpdateBoardInput = {
  appointment?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ILocationInput>;
  recruitGrade?: InputMaybe<Scalars['String']>;
  recruitPeople?: InputMaybe<Scalars['Int']>;
  recruitRegion?: InputMaybe<Scalars['String']>;
  recruitSports?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateReviewBoardInput = {
  content?: InputMaybe<Scalars['String']>;
  reviewImage?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  age?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  prefer?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  age: Scalars['String'];
  email: Scalars['String'];
  gender: Scalars['String'];
  grade: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<IImage>;
  nickname: Scalars['String'];
  prefer: Scalars['String'];
  region: Scalars['String'];
};
