// ContextAPI 사용해보기 !
// 장점 : 변경이 많지 않은 데이터를 사용할 때, 스토어가 적을 때 쓰면 가벼움
// 단점 : 커다란 데이터 처리에는 적합하지 않음
// 이유 : 1. 구독한 데이터가 변할때마다 컴포넌트들이 리렌더링해서 효율성 x
//       2. Store가 여러개가 되면 ~~~.Provider 로 사용해야하는데 관리하기 힘들어짐
// 예 ) Store 5개를 MyStoreConsumer가 구독을 해야한다면?
//     스토어1.Provider 기입, 스토어2.Procider .. ...

import React from "react";

// ---1. 데이터를 저장할 공간 만들어 주기.
const MyStore = React.createContext();

function App() {
  //--4. 데이터 수정하기
  const [name, setName] = React.useState();


  return (
    <div className="App">
      {/* ---2. 데이터 주입시키기 
      만든 컨텍스트 안에 있는 Provider 사용하기 
      넣어주고 싶은 데이터(value)가 있다면 여기에 넣기 */}
      {/* <MyStore.Provider value={{ name: "songyi" }}> */}

      {/* 4-1. useState의 데이터로 갈아끼워주기 */}
      {/* <MyStore.Provider value={{ name: name, setName: setName }}> 
          key와 value 값 같아서 key 값만 쓰기*/}
      <MyStore.Provider value={{ name, setName }}>
       
        {/* ---3. 구독하기 (name이라는 딕셔너리 구독중) */}
        {/* <MyStore.Consumer>
          {(value) => {
            return <div>{value.name}</div>;
          }}
        </MyStore.Consumer> */}



        {/* 3-1. useContext 사용하기 */}
        <MyStoreConsumer/>
      </MyStore.Provider>



    </div>
  );
}


const MyStoreConsumer = () => {
  const {name, setName} = React.useContext(MyStore);
  // MyStoreConsumer 에서도 수정할 수 있게 setName 받아오기
  
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => {
        setName("ㅁㅁㅁ")
      }}>이름 바꾸기</button>
    </div>
  );

}


export default App;
