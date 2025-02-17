//Key Value 매핑

enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
//API 타입 1
type ApiState = {
  getUser: State | string | number | undefined;
  paginateUser: State | undefined;
  defeceUser: State | null;
  getPost: State;
};

//API 타입 2
type UserApiState = {
  getUser: State | string | number;
  paginateUser: State | undefined;
  defeceUser: State | null;
};

//API 타입 3
// 아래처럼 구성하면 타입이 변경이 일어나도 추가 작업이 없다.
// 속성이 변화가 일어나도 한번에 모두 변화가 일어난다.
type UserApiState2 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

//API 타입 4
type UserApiState3 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

//API 타입 5
// 유틸리티 타입 (수요일 쯤에 정리해 드릴께요.)

// Pick 원하는 것만 뽑을 경우
type UserApiState4 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;

// Omit 원하는 것만 제외하는 경우
type UserApiState5 = Omit<ApiState, "getPost">;

//keyof
type Allkeys = keyof ApiState;
const key1: Allkeys = "getUser";
const key2: Allkeys = "paginateUser";
const key3: Allkeys = "defeceUser";
const key4: Allkeys = "getPost";
const key5: Allkeys = "goGo"; //오류 발생

//API 타입 6
//속성 모두 가져오기
type UserApiState6 = { [key in keyof ApiState]: ApiState[key] };

//유틸리티 사용해 보기
//항목 한개 빼기
type UserApiState7 = { [key in Exclude<keyof ApiState, "getPost">]: ApiState[key] }; //getPost 속성은 제거하고 나머지를 뽑아서 정의하라

//항목 한개 빼고 모두 옵션으로 바꾸어라
type UserApiState8 = { [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key] }; //getPost 속성은 제거하고 나머지를 뽑아서 정의하라
